import LinkButton from '../UI/LinkButton';
import login from '../../assets/icon/enter.png';
import signup from '../../assets/icon/add-user.png';
import { useLocation } from 'react-router-dom';

const Account = () => {
  const { pathname } = useLocation();
  const user = false;
  return (
    <div>
      {user ? (
        <h1>users</h1>
      ) : pathname === '/login' ? (
        <LinkButton displayName={'Signup'} path={'/signup'} icon={signup} />
      ) : (
        <LinkButton displayName={'Login'} path={'/login'} icon={login} />
      )}
    </div>
  );
};

export default Account;
