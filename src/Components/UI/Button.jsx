import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ displayName, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {displayName}
    </button>
  );
};

Button.propTypes = {
  displayName: PropTypes.string.isRequired,
};

export default Button;
