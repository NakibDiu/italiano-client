import app from "../utils/firebase/firebase.config";
import { createContext, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const signupUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const updateUser = (info) => {
  return updateProfile(auth.currentUser, info);
};

const googleSignUp = () => {
  return signInWithPopup(auth, googleProvider);
};

const githubSignUp = () => {
  return signInWithPopup(auth, githubProvider);
};

const AuthProviders = ({ children }) => {
  const authInfo = {
    signupUser,
    updateUser,
    googleSignUp,
    githubSignUp,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
