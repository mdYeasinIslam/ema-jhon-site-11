import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext("");
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "hasna" });
    const signUpAuth = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInAuth = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
  const userInfo = { user,signUpAuth,logInAuth };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
