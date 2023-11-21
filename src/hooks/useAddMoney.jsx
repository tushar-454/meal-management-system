import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useAddMoney = () => {
  const [total, setTotal] = useState(0);
  const { user } = useAuth();
  const axios = useAxios();
  const {
    data: moneyMonthlyData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['moneyMonthlyData'],
    queryFn: () =>
      axios
        .get(
          `/user/all-money?email=${user.email}&month=${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`
        )
        .then((res) => {
          const totalMoney = res.data.reduce((cur, acc) => cur + acc.money, 0);
          setTotal(totalMoney);
          return res.data;
        }),
  });
  return {
    moneyMonthlyData,
    isLoading,
    refetch,
    total,
  };
};

export default useAddMoney;
