import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import signup from '../../assets/icon/add-user.png';
import login from '../../assets/icon/enter.png';
import signout from '../../assets/icon/exit.png';
import darkmode from '../../assets/icon/night-mode.png';
import bellIco from '../../assets/icon/notification.png';
import LinkButton from '../UI/LinkButton';
import styles from './Account.module.css';

const Account = () => {
  const [isShowProDropdown, setShowProDropdown] = useState(false);
  const { pathname } = useLocation();
  const { user, logOutAccount, profilePhoto } = useContext(AuthContext);
  useEffect(() => {
    window.addEventListener('scroll', () => setShowProDropdown(false));
  }, []);
  return (
    <div>
      {user ? (
        <div className={styles.userWrap}>
          <div className={styles.notification}>
            <img src={bellIco} alt='notification icon' />
          </div>
          <div className={styles.userProfile}>
            <div className={styles.userProfileWrap}>
              <img
                src={user?.photoURL || profilePhoto}
                alt='profile image'
                onClick={() => setShowProDropdown(!isShowProDropdown)}
              />
              <div
                className={styles.userProfileDropdownWrap}
                style={{
                  transform: `scale(${isShowProDropdown ? 1 : 0})`,
                }}
              >
                <div className={styles.userProfileInfo}>
                  <h4>{user?.displayName}</h4>
                  <p>{user?.email.slice(0, user?.email.indexOf('@'))}</p>
                </div>
                <div className={styles.userProfileDropdown}>
                  <img src={darkmode} alt='night mode icon' />
                  <p>Darkmode</p>
                </div>
                <div
                  className={styles.userProfileDropdown}
                  onClick={logOutAccount}
                >
                  <img src={signout} alt='night mode icon' />
                  <p>Signout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : pathname === '/login' ? (
        <LinkButton displayName={'Signup'} path={'/signup'} icon={signup} />
      ) : (
        <LinkButton displayName={'Login'} path={'/login'} icon={login} />
      )}
    </div>
  );
};

export default Account;
