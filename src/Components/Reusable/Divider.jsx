import PropTypes from 'prop-types';
import styles from './Divider.module.css';

const Divider = ({ text }) => {
  return (
    <div className={styles.divider}>
      <p>{text}</p>
    </div>
  );
};

Divider.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Divider;
