import { IUsersDetail } from '@/shared/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { openDB } from 'idb';

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

  async function saveUserDetails(userDetail: IUsersDetail) {
    const db = await dbPromise;
    const tx = db.transaction('userDetails', 'readwrite');
    const store = tx.objectStore('userDetails');

    await store.put(userDetail);

    await tx.done;

    const users = localStorage.getItem('users');
    if (users) {
      const usersArray = JSON.parse(users);
      if (!usersArray.includes(userDetail.id)) {
        usersArray.push(userDetail.id);
        localStorage.setItem('users', JSON.stringify(usersArray));
      }
    } else {
      localStorage.setItem('users', JSON.stringify([userDetail.id]));
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

  const fetchUserDetails = async () => {
    // check if the userDetail is in the cache
    const users = localStorage.getItem('users');
    if (users) {
      const usersArray = JSON.parse(users);
      if (usersArray.includes(userId)) {
        const userDetail = await loadUserDetails(userId);
        return { data: { user: userDetail } };
      }
    }

    const data = await axios.get(`http://localhost:3000/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return data;
  };

  const { isLoading, data } = useQuery('userDetail', fetchUserDetails, {
    onSuccess: async (data) => {
      console.log(data);
      await saveUserDetails(data.data.user);
      setUserDetails(data.data.user);
    },
  });

  return {
    userDetails,
  };
};
