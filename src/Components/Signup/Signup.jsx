import password from '../../assets/icon/cyber-security.png';
import google from '../../assets/icon/google.png';
import email from '../../assets/icon/internet.png';
import name from '../../assets/icon/user.png';
import signupIllustration from '../../assets/sign_up.svg';
import ButtonIco from '../Reusable/ButtonIco';
import Container from '../Reusable/Container';
import Divider from '../Reusable/Divider';
import Info from '../Reusable/Info';
import LogSignLay from '../Reusable/LogSignLay';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import InputFile from '../UI/InputFile';

const Signup = () => {
  return (
    <section>
      <Container>
        <LogSignLay
          illustration={signupIllustration}
          title={'Signup'}
          isRowDirectionReverse={true}
        >
          <Input
            displayName={'Name'}
            id={'name'}
            icon={name}
            type={'text'}
            placeholder={'John Dou'}
          />
          <Input
            displayName={'Email'}
            id={'email'}
            icon={email}
            type={'email'}
            placeholder={'example@yeahoo.com'}
          />
          <InputFile displayName={'Upload your photo'} id={'photoUrl'} />
          <Input
            displayName={'Password'}
            id={'password'}
            icon={password}
            isPassInput={true}
            type={'password'}
            placeholder={'dfO(&*(%'}
          />
          <Input
            displayName={'Confirm Password'}
            id={'confirmPass'}
            icon={password}
            isPassInput={true}
            type={'password'}
            placeholder={'dfO(&*(%'}
          />
          <Checkbox
            displayName={'Accept our terms and condition.'}
            id={'terms'}
          />
          <Button displayName={'Signup'} type={'submit'} />
          <Divider text={'Or'} />
          <ButtonIco displayName={'Login with google'} icon={google} />
          <Info
            text={'You have already an account.'}
            linkText={'Login'}
            path={'/login'}
          />
        </LogSignLay>
      </Container>
    </section>
  );
};

export default Signup;
