import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PublicRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return console.log('Loading');
  }
  if (user) {
    return <Navigate to={'/'} replace />;
  }
  return children;
};

PublicRoutes.propTypes = {
  children: PropTypes.node,
};

export default PublicRoutes;
