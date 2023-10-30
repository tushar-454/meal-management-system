import { updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Auth } from '../../Firebase/firebase-config';
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

const signupInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
  terms: false,
};
const errorInit = {
  name: '',
  email: '',
  photoUrl: '',
  password: '',
  confirmPassword: '',
  terms: false,
};

const Signup = () => {
  const { loginWithGoogle, signupWithEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const [signup, setSignup] = useState({ ...signupInit });
  const [error, setError] = useState({ ...errorInit });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    const newError = type === 'checkbox' ? checked : '';
    setSignup((prevObj) => ({ ...prevObj, [name]: newValue }));
    setError((prevError) => ({ ...prevError, [name]: newError }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const { name, email, photoUrl, password, confirmPassword } = signup;
    if (password !== confirmPassword) {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: 'Password not matched !',
      }));
      return;
    }
    signupWithEmailPassword(email, password)
      .then((currentUser) => {
        updateProfile(Auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        });
        console.log('Account create successfull', currentUser.user);
        navigate('/');
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <section>
      <Container>
        <LogSignLay
          illustration={signupIllustration}
          title={'Signup'}
          isRowDirectionReverse={true}
          handleSubmit={handleSignUpSubmit}
        >
          <Input
            displayName={'Name'}
            id={'name'}
            icon={name}
            type={'text'}
            placeholder={'John Dou'}
            name={'name'}
            onChange={handleInputChange}
            value={signup.name}
            required
          />
          <Input
            displayName={'Email'}
            id={'email'}
            icon={email}
            type={'email'}
            placeholder={'example@yeahoo.com'}
            name={'email'}
            onChange={handleInputChange}
            value={signup.email}
            required
          />
          <InputFile
            displayName={'Upload your photo'}
            id={'photoUrl'}
            name={'photoUrl'}
            onChange={handleInputChange}
            value={signup.photoUrl}
          />
          <Input
            displayName={'Password'}
            id={'password'}
            icon={password}
            isPassInput={true}
            type={'password'}
            placeholder={'dfO(&*(%'}
            name={'password'}
            onChange={handleInputChange}
            value={signup.password}
            required
          />
          <Input
            displayName={'Confirm Password'}
            id={'confirmPass'}
            icon={password}
            isPassInput={true}
            type={'password'}
            placeholder={'dfO(&*(%'}
            name={'confirmPassword'}
            onChange={handleInputChange}
            value={signup.confirmPassword}
            error={error.confirmPassword}
            required
          />
          <Checkbox
            displayName={'Accept our terms and condition.'}
            id={'terms'}
            name={'terms'}
            onChange={handleInputChange}
            value={signup.terms}
            required
          />
          <Button displayName={'Signup'} type={'submit'} />
          <Divider text={'Or'} />
          <ButtonIco
            displayName={'Login with google'}
            icon={google}
            onClick={loginWithGoogle}
          />
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
