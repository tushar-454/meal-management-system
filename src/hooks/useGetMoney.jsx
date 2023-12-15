import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useGetMoney = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    data: moneyMonthlyData,
    isLoading: loadmoneyMonthlyData,
    isError: errormoneyMonthlyData,
    refetch,
  } = useQuery({
    queryKey: ['moneyMonthlyData'],
    enabled: user.email ? true : false,
    queryFn: async () => {
      const res = await axios.get(`/user/all-money?email=${user.email}`);
      return res.data;
    },
  });
  return {
    moneyMonthlyData,
    loadmoneyMonthlyData,
    errormoneyMonthlyData,
    refetch,
  };
};

export default useGetMoney;
