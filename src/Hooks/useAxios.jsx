import axios from "axios";
// import { useContext, useEffect } from "react";
// import AuthProvider from "../Contexts/AuthProvider";
// import { Navigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../Firebase Config/firebase,config,js";

export const axiosSecure = axios.create({
  baseURL: "https://restaurant-manager-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  // const { userSignOut } = useContext(AuthProvider) || {};
  // useEffect(() => {
  //   axiosSecure.interceptors.response.use(
  //     (res) => {
  //       return res;
  //     },
  //     (error) => {
  //       console.log(error);
  //       if (error.response.status === 401 || error.response.status === 403) {
  //         signOut(auth)
  //           .then(<Navigate to="/login" replace></Navigate>)
  //           .catch((err) => console.log(err));
  //       }
  //     }
  //   );
  // }, [userSignOut]);

  return axiosSecure;
};

export default useAxios;
