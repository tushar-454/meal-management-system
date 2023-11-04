import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Toast from '../../Utils/Toast/Toast';
import Loader from '../Loader/Loader';
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
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
