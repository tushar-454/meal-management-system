import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAuth = () => {
  const userInfo = useContext(AuthContext);
  return userInfo;
};

export default useAuth;
