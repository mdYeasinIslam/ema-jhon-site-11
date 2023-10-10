import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext("");
const auth = getAuth(app);
const google = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "hasna" });
  const [loading,setLoading] = useState(true)
    const signUpAuth = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInAuth = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleAuth = () =>{
        return signInWithPopup(auth,google)
    }
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
      })
      return () => unSubscribe()
    },[])
  const userInfo = { user,signUpAuth,logInAuth ,googleAuth};
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
