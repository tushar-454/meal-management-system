import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useUserMonthyMeal = () => {
  const axios = useAxios();
  const { user } = useAuth();

  const {
    data: mealMonthlyData,
    isLoading: mealMonthlyDataLoading,
    isError: mealMonthlyDataError,
  } = useQuery({
    queryKey: ['mealMonthlyData'],
    queryFn: async () => {
      const res = await axios.get(
        `/user/all-meal?email=${user.email}&curMonth=true`
      );
      return res.data;
    },
  });
  return { mealMonthlyData, mealMonthlyDataLoading, mealMonthlyDataError };
};

export default useUserMonthyMeal;
