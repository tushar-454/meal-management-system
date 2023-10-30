import resend from '../../assets/icon/resend.png';
import Container from '../Reusable/Container';
import LinkButton from '../UI/LinkButton';
import styles from './Home.module.css';

const Home = () => {
  const isEmailVarified = false;
  return (
    <section>
      <Container>
        <h1>This is my home Components</h1>
      </Container>
      {/* if user not verified email show this modal  */}
      {isEmailVarified && (
        <div className={styles.mailVerifyModal}>
          <h1>
            Your Email is not verified. Check your mail.{' '}
            <LinkButton
              displayName={'Resend'}
              icon={resend}
              style={{ padding: '0.3rem 0.5rem', gap: '0.5rem' }}
            />
          </h1>
        </div>
      )}
    </section>
  );
};

export default Home;
