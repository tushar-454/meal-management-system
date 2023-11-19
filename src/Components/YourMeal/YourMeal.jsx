import { useQuery } from '@tanstack/react-query';
import calculateTotalMeal from '../../Utils/CalculateTotal/CalculateTotal';
import arrow from '../../assets/icon/arrow.svg';
import breakfast from '../../assets/icon/breakfast.png';
import dinner from '../../assets/icon/dinner.png';
import launch from '../../assets/icon/lunch.png';
import today from '../../assets/icon/only-today.png';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Container from '../Reusable/Container';
import PageTitle from '../Reusable/PageTitle';
import LinkButton from '../UI/LinkButton';
import styles from './YourMeal.module.css';

const YourMeal = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { data: todayMeal, isLoading } = useQuery({
    queryKey: ['todayMeal'],
    queryFn: async () => {
      const res = await axios.get(
        `/user/all-meal?email=${
          user.email
        }&date=${new Date().toLocaleDateString()}`
      );
      return res.data;
    },
  });
  const { data: mealMonthlyData } = useQuery({
    queryKey: ['mealMonthlyData'],
    queryFn: async () => {
      const res = await axios.get(`/user/all-meal?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <section>
      <Container>
        <PageTitle>Your all meal in month</PageTitle>
        {/* today meal highlight  */}
        <div className={styles.todayMealWrap}>
          {isLoading ? (
            <>
              <h1>Loading...</h1>
            </>
          ) : (
            <>
              <LinkButton displayName={'Today'} icon={today} />
              <span>
                <img src={arrow} alt='arrow' />
              </span>
              <LinkButton
                displayName={todayMeal[0]?.breackfast || '0'}
                icon={breakfast}
              />
              <span>
                <img src={arrow} alt='arrow' />
              </span>
              <LinkButton
                displayName={todayMeal[0]?.launch || '0'}
                icon={launch}
              />
              <span>
                <img src={arrow} alt='arrow' />
              </span>
              <LinkButton
                displayName={todayMeal[0]?.dinner || '0'}
                icon={dinner}
              />
            </>
          )}
        </div>
        {/* indivisual current month list  */}
        <div className={styles.tableWrap}>
          <table border={'1'} className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Breakfast</th>
                <th>Launch</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <></>
              ) : (
                <>
                  {mealMonthlyData?.map((perday, index) => (
                    <tr
                      key={index}
                      className={
                        (index + 1) % 2 === 0 ? styles.even : styles.odd
                      }
                    >
                      <td>{perday.date}</td>
                      <td>{perday.breackfast}</td>
                      <td>{perday.launch}</td>
                      <td>{perday.dinner}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th colSpan={3}>{calculateTotalMeal(mealMonthlyData)}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default YourMeal;
