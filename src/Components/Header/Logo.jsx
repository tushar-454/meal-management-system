import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import appName from '../../assets/app-name.png';
import styles from './Logo.module.css';
const Logo = () => {
  return (
    <div>
      <Link to={'/'} className={styles.logoWrap}>
        <img src={logo} alt='website main logo' className={styles.logo} />
        <img src={appName} className={styles.appName} />
      </Link>
    </div>
  );
};

export default Logo;
