import LinkButton from '../UI/LinkButton';
import login from '../../assets/icon/enter.png';

const Account = () => {
  const user = false;
  return (
    <div>
      {user ? (
        <h1>users</h1>
      ) : (
        <LinkButton displayName={'Login'} path={'/login'} icon={login} />
      )}
    </div>
  );
};

export default Account;
