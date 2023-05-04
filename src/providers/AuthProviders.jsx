import app from "../utils/firebase/firebase.config";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const signupUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const updateUser = (info) => {
    return updateProfile(auth.currentUser, info)
}

const AuthProviders = ({ children }) => {
  const authInfo = {
    signupUser,
    updateUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
