import arrow from '../../assets/icon/arrow.svg';
import breakfast from '../../assets/icon/breakfast.png';
import dinner from '../../assets/icon/dinner.png';
import launch from '../../assets/icon/lunch.png';
import today from '../../assets/icon/only-today.png';
import Container from '../Reusable/Container';
import PageTitle from '../Reusable/PageTitle';
import LinkButton from '../UI/LinkButton';
import styles from './YourMeal.module.css';

const YourMeal = () => {
  const mealMonthlyData = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
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
          <LinkButton displayName={'0.5'} icon={breakfast} />
          <span>
            <img src={arrow} alt='arrow' />
          </span>
          <LinkButton displayName={'1.0'} icon={launch} />
          <span>
            <img src={arrow} alt='arrow' />
          </span>
          <LinkButton displayName={'1.0'} icon={dinner} />
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
              {mealMonthlyData.map((perday, index) => (
                <tr
                  key={index}
                  className={(index + 1) % 2 === 0 ? styles.even : styles.odd}
                >
                  <td>01/01/2023</td>
                  <td>0.5</td>
                  <td>1.0</td>
                  <td>1.0</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th colSpan={3}>0.5</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default YourMeal;
