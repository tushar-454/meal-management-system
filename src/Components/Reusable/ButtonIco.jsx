import PropTypes from 'prop-types';
import styles from './ButtonIco.module.css';

const ButtonIco = ({ icon, displayName, ...rest }) => {
  return (
    <div className={styles.buttonIcoWrap} {...rest}>
      <div className={styles.buttonIco}>
        <img src={icon} />
        <p>{displayName}</p>
      </div>
    </div>
  );
};

ButtonIco.propTypes = {
  icon: PropTypes.node,
  displayName: PropTypes.node,
};

export default ButtonIco;
