import forgotpass from '../../assets/forgot_password.svg';
import google from '../../assets/icon/google.png';
import resetPass from '../../assets/icon/reset-password.png';
import ButtonIco from '../Reusable/ButtonIco';
import Container from '../Reusable/Container';
import Divider from '../Reusable/Divider';
import Info from '../Reusable/Info';
import LogSignLay from '../Reusable/LogSignLay';
import Button from '../UI/Button';
import Input from '../UI/Input';

// import styles from './ForgotPassword.module.css'
const ForgotPassword = () => {
  return (
    <section>
      <Container>
        <LogSignLay illustration={forgotpass} title={'Reset Your Password'}>
          <Input
            displayName={'Enter your email'}
            id={'email'}
            icon={resetPass}
            type={'email'}
            placeholder={'example@yeahoo.com'}
          />
          <Button displayName={'Reset Password'} type={'submit'} />
          <Divider text={'Or'} />
          <ButtonIco displayName={'Login with google'} icon={google} />
          <Info
            text={'You have remember your password.'}
            linkText={'Login'}
            path={'/login'}
          />
        </LogSignLay>
      </Container>
    </section>
  );
};

export default ForgotPassword;
