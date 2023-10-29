import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

const Checkbox = ({ displayName, id, ...rest }) => {
  return (
    <>
      <input type='checkbox' id={id} {...rest} className={styles.checkbox} />{' '}
      <label htmlFor={id} className={styles.label}>
        {displayName}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;
