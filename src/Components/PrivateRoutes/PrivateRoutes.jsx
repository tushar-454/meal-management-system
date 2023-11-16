import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import Toast from '../../Utils/Toast/Toast';
import useAuth from '../../hooks/useAuth';
import Loader from '../Loader/Loader';
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    Toast('Please Login first.', 'info');
    return <Navigate to={'/login'} state={pathname} />;
  }
  if (!user?.emailVerified) {
    Toast('Varify your mail', 'info');
    return <Navigate to={'/'} />;
  }
  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
