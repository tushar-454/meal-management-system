/* eslint-disable no-useless-escape */
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Toast from '../../Utils/Toast/Toast';
import password from '../../assets/icon/cyber-security.png';
import google from '../../assets/icon/google.png';
import email from '../../assets/icon/internet.png';
import loginIllustration from '../../assets/login-illustration.png';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
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
  const { loginWithGoogle, loginWithEmailPass } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const axios = useAxios();

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
      .then(() => {
        navigate(state || '/');
        Toast('Login Successfull.', 'success');
      })
      .catch((error) => Toast(error.message, 'error'));
  };

  // handle login with google
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((currentUser) => {
        const user = currentUser?.user;
        axios.get(`/userInfo?email=${user.email}`).then((res) => {
          if (res.data.length > 0) {
            return;
          }
          const userInfo = {
            name: user.displayName,
            email: user.email,
            role: ['user'],
            accountStatus: 'pending',
          };
          axios.post('/userInfo', userInfo).then(() => {});
        });

        navigate(state || '/');
        Toast('Login Successfull.', 'success');
      })
      .catch((error) => Toast(error.message, 'error'));
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
