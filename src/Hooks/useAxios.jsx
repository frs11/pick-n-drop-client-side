import axios from "axios";

export const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://parcel-delivery-server-one.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
