import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import calculateTotalMeal from '../Utils/CalculateTotal/CalculateTotal';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useUserMonthyMeal = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [userTotalMeal, setUserTotalMeal] = useState(0);

  const { data: mealMonthlyData, isLoading: mealMonthlyDataLoading } = useQuery(
    {
      queryKey: ['mealMonthlyData'],
      queryFn: async () => {
        const res = await axios.get(`/user/all-meal?email=${user.email}`);
        setUserTotalMeal(calculateTotalMeal(res.data));
        return res.data;
      },
    }
  );
  return { mealMonthlyData, mealMonthlyDataLoading, userTotalMeal };
};

export default useUserMonthyMeal;
