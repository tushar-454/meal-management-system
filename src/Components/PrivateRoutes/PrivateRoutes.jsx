import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../Loader/Loader';
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (!user?.emailVerified) {
    return (
      <>
        <Navigate to={'/'} />
      </>
    );
  }
  if (!user) {
    return <Navigate to={'/login'} state={pathname} />;
  }
  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
