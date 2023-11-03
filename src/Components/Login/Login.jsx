/* eslint-disable no-useless-escape */
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import password from '../../assets/icon/cyber-security.png';
import google from '../../assets/icon/google.png';
import email from '../../assets/icon/internet.png';
import loginIllustration from '../../assets/login-illustration.png';
import ButtonIco from '../Reusable/ButtonIco';
import Container from '../Reusable/Container';
import Divider from '../Reusable/Divider';
import Info from '../Reusable/Info';
import LogSignLay from '../Reusable/LogSignLay';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import styles from './Login.module.css';
const loginInit = {
  email: '',
  password: '',
};
const errorInit = {
  email: '',
  password: '',
};
const Login = () => {
  const [login, setLogin] = useState({ ...loginInit });
  const [error, setError] = useState({ ...errorInit });
  const { loginWithGoogle, loginWithEmailPass } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  //handle input change in react way
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevObj) => ({ ...prevObj, [name]: value }));
    setError((prevObj) => ({ ...prevObj, [name]: '' }));
  };

  //handle login with email and password
  const handleLoginEmailPass = (e) => {
    e.preventDefault();
    const { email, password } = login;
    if (!email) {
      setError((prevObj) => ({ ...prevObj, email: 'Email required !' }));
      return;
    }
    if (!password) {
      setError((prevObj) => ({ ...prevObj, password: 'Password required !' }));
      return;
    }
    loginWithEmailPass(email, password)
      .then((currentUser) => {
        navigate(state || '/');
        console.log(currentUser.user);
      })
      .catch((error) => console.log(error.message));
  };

  // handle login with google
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((currentUser) => {
        navigate(state || '/');
        console.log(currentUser.user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <section>
      <Container>
        <LogSignLay
          illustration={loginIllustration}
          title={'Login'}
          handleSubmit={handleLoginEmailPass}
        >
          <Input
            displayName={'Email'}
            id={'email'}
            icon={email}
            type={'email'}
            name={'email'}
            placeholder={'example@yeahoo.com'}
            value={login.email}
            onChange={handleInputChange}
            error={error.email}
          />
          <Input
            isPassInput={true}
            displayName={'Password'}
            id={'password'}
            icon={password}
            type={'password'}
            name={'password'}
            placeholder={'dlfh459#$*J'}
            value={login.password}
            onChange={handleInputChange}
            error={error.password}
          />
          <div className={styles.remforWrap}>
            <div>
              <Checkbox displayName={'remember me.'} id={'remember'} />
            </div>
            <div>
              <Link to={'/forgot-password'} className={styles.forgotPass}>
                Forgot password ?
              </Link>
            </div>
          </div>
          <Button displayName={'Login'} type={'submit'} />
          <Divider text={'Or'} />
          <ButtonIco
            displayName={'Login with google'}
            icon={google}
            onClick={handleLoginWithGoogle}
          />
          <Info
            text={'Don’t have an account.'}
            linkText={'Signup'}
            path={'/signup'}
          />
        </LogSignLay>
      </Container>
    </section>
  );
};

export default Login;
