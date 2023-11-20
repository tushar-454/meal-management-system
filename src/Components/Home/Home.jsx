import { useQuery } from '@tanstack/react-query';
import breakfast from '../../assets/icon/breakfast.png';
import dinner from '../../assets/icon/dinner.png';
import dish from '../../assets/icon/dish.png';
import launch from '../../assets/icon/lunch.png';
import resend from '../../assets/icon/resend.png';
import today from '../../assets/icon/timetable.png';
import money from '../../assets/icon/wallet.png';
import more from '../../assets/icon/zoom.png';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import CardPill from '../Reusable/CardPill';
import Container from '../Reusable/Container';
import LinkButton from '../UI/LinkButton';
import styles from './Home.module.css';

const Home = () => {
  const { user, sendEmailVerifyMail } = useAuth();
  const axios = useAxios();
  const {
    data: todaysMeal = {},
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
      return res.data[0];
    },
  });
  return (
    <section>
      <Container>
        <div className={styles.homeContentWrap}>
          <div className={styles.mealCard}>
            <CardPill
              icon={today}
              title={'Today Meal'}
              quentity={
                isLoading ? '...' : isError ? '0' : todaysMeal?.perDayTotal
              }
            />
            <div className={styles.mealCardTodayQuentity}>
              <LinkButton
                displayName={
                  isLoading ? '...' : isError ? '0' : todaysMeal?.breackfast
                }
                icon={breakfast}
              />
              <LinkButton
                displayName={
                  isLoading ? '...' : isError ? '0' : todaysMeal?.launch
                }
                icon={launch}
              />
              <LinkButton
                displayName={
                  isLoading ? '...' : isError ? '0' : todaysMeal?.dinner
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
            <CardPill icon={money} title={'Total Money'} quentity={2050} />
            <CardPill icon={dish} title={'Total Dish'} quentity={205} />
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
