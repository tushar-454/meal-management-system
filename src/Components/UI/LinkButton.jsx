import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './LinkButton.module.css';

const LinkButton = ({ displayName, path, icon }) => {
  return (
    <Link to={path} className={styles.link}>
      <span className={styles.button}>
        <img src={icon} />
        {displayName}
      </span>
    </Link>
  );
};

LinkButton.propTypes = {
  displayName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default LinkButton;
