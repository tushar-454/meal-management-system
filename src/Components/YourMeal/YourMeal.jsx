import arrow from '../../assets/icon/arrow.svg';
import breakfast from '../../assets/icon/breakfast.png';
import dinner from '../../assets/icon/dinner.png';
import launch from '../../assets/icon/lunch.png';
import today from '../../assets/icon/only-today.png';
import useTodayMeal from '../../hooks/useTodayMeal';
import useUserMonthyMeal from '../../hooks/useUserMonthyMeal';
import Container from '../Reusable/Container';
import PageTitle from '../Reusable/PageTitle';
import LinkButton from '../UI/LinkButton';
import styles from './YourMeal.module.css';

const YourMeal = () => {
  const { todaysMeal, isLoading, isError } = useTodayMeal();
  const { mealMonthlyData, mealMonthlyDataLoading, mealMonthlyDataError } =
    useUserMonthyMeal();
  return (
    <section>
      <Container>
        <PageTitle>Your all meal in month</PageTitle>
        {/* today meal highlight  */}
        <div className={styles.todayMealWrap}>
          <LinkButton displayName={'Today'} icon={today} />
          <span>
            <img src={arrow} alt='arrow' />
          </span>
          <LinkButton
            displayName={
              isLoading
                ? '...'
                : isError
                ? 0
                : todaysMeal?.oneMealByEmailDate[0]?.breackfast
            }
            icon={breakfast}
          />
          <span>
            <img src={arrow} alt='arrow' />
          </span>
          <LinkButton
            displayName={
              isLoading
                ? '...'
                : isError
                ? 0
                : todaysMeal?.oneMealByEmailDate[0]?.launch
            }
            icon={launch}
          />
          <span>
            <img src={arrow} alt='arrow' />
          </span>
          <LinkButton
            displayName={
              isLoading
                ? '...'
                : isError
                ? 0
                : todaysMeal?.oneMealByEmailDate[0]?.dinner
            }
            icon={dinner}
          />
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
              {mealMonthlyDataLoading ? (
                <tr>
                  <td colSpan={'4'} style={{ textAlign: 'center' }}>
                    Loading...
                  </td>
                </tr>
              ) : mealMonthlyDataError ? (
                <tr>
                  <td colSpan={'4'} style={{ textAlign: 'center' }}>
                    There was an error
                  </td>
                </tr>
              ) : (
                <>
                  {mealMonthlyData?.curMonthAllMeal?.map((perday, index) => (
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
                <th colSpan={3}>
                  {mealMonthlyDataLoading
                    ? '...'
                    : mealMonthlyDataError
                    ? 0
                    : mealMonthlyData?.curTotalMeal}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default YourMeal;
