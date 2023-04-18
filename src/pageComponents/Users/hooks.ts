import { IUsersDetail } from '@/shared/types';
import axios from 'axios';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { openDB } from 'idb';
import { APIService } from '@/service';

const CACHE_INVALIDATION_TIME = 1000 * 60; // 1 min

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const queryClient = useQueryClient();

  const initDb = async () => {
    const db = await openDB('lendsqr-fe-test-allUsers', 1, {
      upgrade(db) {
        db.createObjectStore('users', { keyPath: 'id' });
      },
    });
    return db;
  };

  const dbPromise = initDb();

  async function saveUsers(users: IUsersDetail[]) {
    try {
      const db = await dbPromise;
      const tx = db.transaction('users', 'readwrite');
      const store = tx.objectStore('users');
      await store.clear();
      await Promise.all(users.map((user) => store.put(user)));
      await tx.done;
      // set the current time in localstorage to be used to check if the cache is stale
      localStorage.setItem(
        'users-last-updated',
        new Date().getTime().toString()
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function loadUsers() {
    const db = await dbPromise;
    const tx = db.transaction('users');
    const store = tx.objectStore('users');
    const users = await store.getAll();
    await tx.done;
    return users;
  }

  const fetchUsers = async () => {
    const apiService = new APIService();
    // check if the cache is stale
    const lastUpdated = localStorage.getItem('users-last-updated');
    //compare the current time with the last updated time and if the difference is greater than the cache invalidation time, fetch the data from the server
    if (
      lastUpdated &&
      new Date().getTime() - parseInt(lastUpdated) > CACHE_INVALIDATION_TIME
    ) {
      const data = await apiService.getUsers();
      return data;
    }
    // if the cache is not stale, load the data from the cache
    const users = await loadUsers();
    return { users };
  };

  const { isLoading, data } = useQuery('users', fetchUsers, {
    onSuccess: async (data) => {
      await saveUsers(data.users);
      setUsers(data.users);
    },
  });

  return {
    users,
    isLoading,
  };
};
