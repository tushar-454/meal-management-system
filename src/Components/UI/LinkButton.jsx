import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

const LinkButton = ({ displayName, path, icon, ...rest }) => {
  return (
    <Link to={path} className={styles.link} {...rest}>
      <span className={styles.button} {...rest}>
        <img src={icon} />
        {displayName}
      </span>
    </Link>
  );
};

LinkButton.propTypes = {
  displayName: PropTypes.any,
  path: PropTypes.string,
  icon: PropTypes.node,
};

export default LinkButton;
