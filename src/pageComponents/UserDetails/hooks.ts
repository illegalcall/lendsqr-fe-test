import { IUsersDetail } from '@/shared/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

export const useUserDetails = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<IUsersDetail>();
  const queryClient = useQueryClient();
  const userId = router.query.id as string;

  const fetchUsers = async () => {
    const data = await axios.get(`http://localhost:3000/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return data;
  };
  const { isLoading, data } = useQuery('users', fetchUsers, {
    onSuccess: (data) => {
      console.log(data);
      setUserDetails(data.data.user);
    },
  });
  return {
    userDetails,
  };
};
