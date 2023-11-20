import PropTypes from 'prop-types';
import arrow from '../../assets/icon/arrow.svg';
import styles from './CardPill.module.css';

const CardPill = ({ icon, title, quentity }) => {
  return (
    <div className={styles.pillWrap}>
      <div className={styles.pillName}>
        <img src={icon} alt='pill icon' />
        <h1>{title}</h1>
      </div>
      <span>
        <img src={arrow} alt='arrow' />
      </span>
      <h1 className={styles.pillQuentity}>{quentity}</h1>
    </div>
  );
};

CardPill.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  quentity: PropTypes.any,
};

export default CardPill;
