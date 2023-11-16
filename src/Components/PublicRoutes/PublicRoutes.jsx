import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Loader from '../Loader/Loader';

const PublicRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loader />;
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
