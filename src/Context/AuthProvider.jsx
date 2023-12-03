import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase Configs/firebase,config,js";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [userFoods, setuserFoods] = useState([]);
  // const axiosSecureJwt = useAxios();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     axiosSecureJwt
  //       .get(`/userAddedFoods?user=${user?.email}`)
  //       .then((res) => {
  //         // console.log(res?.data);
  //         setuserFoods(res?.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [user, axiosSecureJwt]);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const UserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const contextData = {
    user,
    // userFoods,
    loading,
    createNewUser,
    UserLogin,
    userSignOut,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
