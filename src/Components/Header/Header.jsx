import styles from './Header.module.css';
import Container from '../Reusable/Container';
import Account from './Account';
import Logo from './Logo';
import Navmenu from './Navmenu';

const Header = () => {
  return (
    <header>
      <Container>
        <div className={styles.headerWrap}>
          <Logo />
          <Navmenu />
          <Account />
        </div>
      </Container>
    </header>
  );
};

export default Header;
