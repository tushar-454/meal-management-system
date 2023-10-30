import PropTypes from 'prop-types';
import { useState } from 'react';
import hide from '../../assets/icon/hide.png';
import view from '../../assets/icon/view.png';
import styles from './Input.module.css';

const Input = ({
  id,
  displayName,
  icon,
  type,
  isPassInput,
  error,
  ...rest
}) => {
  const [isPassHide, setIsPassHide] = useState(false);
  return (
    <div className={styles.inputDiv}>
      <label htmlFor={id} className={styles.label}>
        {displayName}
      </label>
      <div className={styles.inputWrap}>
        <img src={icon} className={styles.icon} />
        <input
          id={id}
          type={isPassHide ? 'text' : type}
          {...rest}
          className={styles.input}
          style={{ padding: type === 'password' && '1rem 3rem 1rem 3.1rem' }}
        />
        {isPassInput && (
          <img
            src={isPassHide ? hide : view}
            className={styles.passIcon}
            onClick={() => setIsPassHide(!isPassHide)}
          />
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  isPassInput: PropTypes.bool,
  displayName: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
};

export default Input;
