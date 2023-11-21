import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useTodayMeal = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const {
    data: todaysMeal,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['homeTodayMeal'],
    queryFn: async () => {
      const res = await axios.get(
        `/user/all-meal?email=${
          user.email
        }&date=${new Date().toLocaleDateString()}`
      );
      return res.data;
    },
  });
  return {
    todaysMeal,
    isLoading,
    isError,
  };
};

export default useTodayMeal;
