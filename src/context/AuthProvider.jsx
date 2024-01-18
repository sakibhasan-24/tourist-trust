import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState("");
  const [loading, setLaoding] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  //   google sign in
  const googleSignIn = () => {
    setLaoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLaoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogIn = (email, password) => {
    setLaoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userLogOut = () => {
    setLaoding(true);
    return signOut(auth);
  };
  //   memory clean up

  useEffect(() => {
    const clearMemory = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // console.log(currentUser);
        const userInfo = currentUser.email;
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            // console.log(res.data.token);
            localStorage.setItem("token", res.data.token);
          }
        });
      } else {
        console.log("currently no user");
        localStorage.removeItem("token");
      }
    });
    setLaoding(false);
    return () => clearMemory();
  });
  //   return value
  const authValue = {
    googleSignIn,
    createUser,
    userLogIn,
    userLogOut,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
