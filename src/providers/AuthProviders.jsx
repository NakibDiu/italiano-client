import app from "../utils/firebase/firebase.config";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signupUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const updateUser = (info) => {
    return updateProfile(auth.currentUser, info)
}

const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider);
}

const AuthProviders = ({ children }) => {
  const authInfo = {
    signupUser,
    updateUser,
    googleSignUp,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
