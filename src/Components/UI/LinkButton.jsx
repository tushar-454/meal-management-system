import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

const LinkButton = ({ displayName, path, icon, ...rest }) => {
  return (
    <Link to={path} className={styles.link}>
      <span className={styles.button} {...rest}>
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
