import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { Auth } from '../Firebase/firebase-config';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState('');

  // login with google
  const loginWithGoogle = () => {
    setLoading(false);
    return signInWithPopup(Auth, new GoogleAuthProvider());
  };

  // signup or crate account with email and password
  const signupWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  // signin account with email and password
  const loginWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  //logout account
  const logOutAccount = () => {
    setLoading(false);
    signOut(Auth)
      .then(() => console.log('Logout successfull'))
      .catch((error) => console.log(error.message));
  };

  // send email varification mail
  const sendEmailVerifyMail = () => {
    sendEmailVerification(Auth.currentUser)
      .then(() => console.log('Email verification send successfull'))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscriber();
  }, []);

  const userInfo = {
    user,
    loading,
    profilePhoto,
    setProfilePhoto,
    loginWithGoogle,
    signupWithEmailPassword,
    loginWithEmailPass,
    logOutAccount,
    sendEmailVerifyMail,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
