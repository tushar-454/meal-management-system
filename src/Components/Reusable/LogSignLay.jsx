import PropTypes from 'prop-types';
import styles from './LogSignLay.module.css';

const LogSignLay = ({ illustration, title, handleSubmit, children }) => {
  return (
    <div className={styles.logSignWrap}>
      <div className={styles.logSignImg}>
        <img src={illustration} width={'100%'} />
      </div>
      <div className={styles.logSignForm}>
        <div className={styles.formTitle}>
          <h1>{title}</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.formWrap}>
          {children}
        </form>
      </div>
    </div>
  );
};

LogSignLay.propTypes = {
  illustration: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default LogSignLay;
