import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://restaurant-manager-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
