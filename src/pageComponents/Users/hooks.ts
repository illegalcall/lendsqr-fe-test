import axios from 'axios';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const queryClient = useQueryClient();

  const fetchUsers = async () => {
    const data = await axios.get('http://localhost:3000/api/users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return data;
  };
  const { isLoading, data } = useQuery('users', fetchUsers, {
    onSuccess: (data) => {
      console.log(data);
      setUsers(data.data.users);
    },
  });
  return {
    users,
  };
};
