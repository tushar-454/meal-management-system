import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ label, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
