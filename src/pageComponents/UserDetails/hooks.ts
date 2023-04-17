import { IUsersDetail } from '@/shared/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { openDB } from 'idb';
import { APIService } from '@/service';

const CACHE_INVALIDATION_TIME = 1000 * 60; // 1 minute

export const useUserDetails = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<IUsersDetail>();
  const queryClient = useQueryClient();
  const userId = router.query.id as string;

  const initDb = async () => {
    const db = await openDB('lendsqr-fe-test-1', 1, {
      upgrade(db) {
        db.createObjectStore('userDetails', { keyPath: 'id' });
      },
    });
    return db;
  };

  const dbPromise = initDb();

  async function saveUserDetails(userDetail: IUsersDetail | undefined) {
    if (!userDetail) return;

    const db = await dbPromise;
    const tx = db.transaction('userDetails', 'readwrite');
    const store = tx.objectStore('userDetails');

    await store.put(userDetail);

    await tx.done;

    // make a hashmap of userid with timestamp in local storage, so that we can check if the cache is stale
    const users = localStorage.getItem('users');
    if (users) {
      const usersObject = JSON.parse(users);
      usersObject[userDetail.id] = new Date().getTime();
      localStorage.setItem('users', JSON.stringify(usersObject));
    } else {
      const usersObject: any = {};
      usersObject[userDetail.id] = new Date().getTime();
      localStorage.setItem('users', JSON.stringify(usersObject));
    }
  }

  async function loadUserDetails(id: string) {
    const db = await dbPromise;
    const tx = db.transaction('userDetails');
    const store = tx.objectStore('userDetails');
    const userDetail = await store.get(id);

    await tx.done;
    return userDetail;
  }

  const checkUserIdInCache = async () => {
    const users = localStorage.getItem('users');
    if (users) {
      const usersObject = JSON.parse(users);
      if (usersObject[userId]) {
        return true;
      }
    }
    return false;
  };

  const checkUserDetailStale = async () => {
    const users = localStorage.getItem('users');
    if (users) {
      const usersObject = JSON.parse(users);
      if (usersObject[userId]) {
        if (
          new Date().getTime() - usersObject[userId] <
          CACHE_INVALIDATION_TIME
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const fetchUserDetails = async () => {
    const apiService = new APIService();
    let data: {
      user: IUsersDetail | undefined;
    } = {
      user: undefined,
    };
    const isUserIdInCache = await checkUserIdInCache();
    const isUserDetailStale = await checkUserDetailStale();

    if (isUserIdInCache && !isUserDetailStale) {
      data.user = await loadUserDetails(userId);
    } else {
      data = await apiService.getUserDetails(userId);
      await saveUserDetails(data.user);
    }

    return data;
  };

  const { isLoading, data } = useQuery('userDetail', fetchUserDetails, {
    onSuccess: async (data) => {
      await saveUserDetails(data.user);
      setUserDetails(data.user);
    },
  });

  return {
    userDetails,
    isLoading,
  };
};
