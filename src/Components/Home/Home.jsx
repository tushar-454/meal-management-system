import breakfast from '../../assets/icon/breakfast.png';
import dinner from '../../assets/icon/dinner.png';
import dish from '../../assets/icon/dish.png';
import launch from '../../assets/icon/lunch.png';
import resend from '../../assets/icon/resend.png';
import today from '../../assets/icon/timetable.png';
import money from '../../assets/icon/wallet.png';
import more from '../../assets/icon/zoom.png';
import useAddMoney from '../../hooks/useAddMoney';
import useAuth from '../../hooks/useAuth';
import useTodayMeal from '../../hooks/useTodayMeal';
import useUserMonthyMeal from '../../hooks/useUserMonthyMeal';
import CardPill from '../Reusable/CardPill';
import Container from '../Reusable/Container';
import LinkButton from '../UI/LinkButton';
import styles from './Home.module.css';

const Home = () => {
  const { user, sendEmailVerifyMail } = useAuth();
  const { todaysMeal, isLoading, isError } = useTodayMeal();
  const { total, isLoading: loadTotalMoney } = useAddMoney();
  const { mealMonthlyDataLoading, userTotalMeal } = useUserMonthyMeal();

  return (
    <section>
      <Container>
        <div className={styles.homeContentWrap}>
          <div className={styles.mealCard}>
            <CardPill
              icon={today}
              title={'Today Meal'}
              quentity={
                isLoading ? '...' : isError ? '0' : todaysMeal[0]?.perDayTotal
              }
            />
            <div className={styles.mealCardTodayQuentity}>
              <LinkButton
                displayName={
                  isLoading ? '...' : isError ? '0' : todaysMeal[0]?.breackfast
                }
                icon={breakfast}
              />
              <LinkButton
                displayName={
                  isLoading ? '...' : isError ? '0' : todaysMeal[0]?.launch
                }
                icon={launch}
              />
              <LinkButton
                displayName={
                  isLoading ? '...' : isError ? '0' : todaysMeal[0]?.dinner
                }
                icon={dinner}
              />
            </div>
            <LinkButton
              displayName={'View More'}
              icon={more}
              path={'your-meal'}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </div>
          <div className={styles.moneyCard}>
            <CardPill
              icon={money}
              title={'Total Money'}
              quentity={loadTotalMoney ? 0 : total}
            />
            <CardPill
              icon={dish}
              title={'Total Dish'}
              quentity={mealMonthlyDataLoading ? 0 : userTotalMeal}
            />
            <LinkButton
              displayName={'View More'}
              icon={more}
              path={'add-money'}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </div>
        </div>
      </Container>
      {/* if user not verified email show this modal  */}
      {user !== null && !user?.emailVerified && (
        <div className={styles.mailVerifyModal}>
          <h1>
            Your Email is not verified. Check your mail.{' '}
            <LinkButton
              displayName={'Resend'}
              icon={resend}
              style={{ padding: '0.3rem 0.5rem', gap: '0.5rem' }}
              onClick={sendEmailVerifyMail}
            />
          </h1>
        </div>
      )}
    </section>
  );
};

export default Home;
