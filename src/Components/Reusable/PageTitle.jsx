import PropTypes from 'prop-types';
import styles from './PageTitle.module.css';

const PageTitle = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

PageTitle.propTypes = {
  children: PropTypes.node,
};

export default PageTitle;
