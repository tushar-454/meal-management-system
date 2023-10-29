import menuBar from '../../assets/icon/bar.svg';
import { NavLink } from 'react-router-dom';
import styles from './Navmenu.module.css';
// javascript array with navmenu data for looping
const navItems = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Add Meal',
    path: '/add-meal',
  },
  {
    id: 3,
    name: 'Your Meal',
    path: '/your-meal',
  },
  {
    id: 4,
    name: 'Add Money',
    path: '/add-money',
  },
  {
    id: 5,
    name: 'Monthly',
    path: '/monthly',
  },
];

const Navmenu = () => {
  return (
    <>
      <div className={styles.menuBar}>
        <img src={menuBar} alt='menubar' />
      </div>
      <div className={styles.navItems}>
        {navItems?.map((item) => (
          <NavLink key={item.id} to={item.path} className={styles.navItem}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navmenu;
