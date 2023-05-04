import app from "../utils/firebase/firebase.config";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const signupUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const AuthProviders = ({ children }) => {
  const authInfo = {
    signupUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
