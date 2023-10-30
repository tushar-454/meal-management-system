import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { Auth } from '../Firebase/firebase-config';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // login with google
  const loginWithGoogle = () => {
    signInWithPopup(Auth, new GoogleAuthProvider())
      .then((currentUser) => {
        console.log(currentUser.user);
      })
      .catch((error) => console.log(error.message));
  };

  //logout account
  const logOutAccount = () => {
    signOut(Auth)
      .then(() => console.log('Logout successfull'))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscriber();
  }, []);

  const userInfo = { user, loginWithGoogle, logOutAccount };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
