import PropTypes from 'prop-types';
import Button from '../UI/Button';
import styles from './MealFormLay.module.css';

const MealFormLay = ({ handleSubmit, displayName, children, ...rest }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.mealFormWrap}>{children}</div>
      <Button displayName={displayName} {...rest} />
    </form>
  );
};

MealFormLay.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
  displayName: PropTypes.string,
};

export default MealFormLay;
