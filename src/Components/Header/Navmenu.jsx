import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuBar from '../../assets/icon/bar.svg';
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
  const [isCollapse, setIsCollapse] = useState(false);
  useEffect(() => {
    const navItemsNode = document.querySelectorAll('.navItem');
    navItemsNode.forEach((navItem) => {
      navItem.addEventListener('click', () => {
        setIsCollapse(false);
      });
    });
    window.addEventListener('scroll', () => {
      setIsCollapse(false);
    });
  }, []);
  return (
    <>
      <div
        className={styles.menuBar}
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <img
          src={menuBar}
          alt='menubar'
          className={isCollapse ? styles.active : styles.inActive}
        />
      </div>
      <div className={`${styles.navItems} ${isCollapse && styles.collapse}`}>
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
