import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import AdminDashboard from "../Components/Dashboard/Admin Dashboard/AdminDashboard";
import UserDashboard from "../Components/Dashboard/User Dashboard/UserDashboard";
import DeliveryDashboard from "../Components/Dashboard/DeliveryMan Dashboard/DeliveryDashboard";

const DashBoard = () => {
  const users = useLoaderData();
  const { user } = useContext(AuthContext);
  const userRole = users.find((tempUser) => tempUser.email == user.email);

  return (
    <div className="dark:bg-slate-800 dark:text-white">
      {userRole.role === "admin" ? (
        <AdminDashboard userRole={userRole.role}></AdminDashboard>
      ) : userRole.role === "user" ? (
        <UserDashboard userRole={userRole.role}></UserDashboard>
      ) : (
        <DeliveryDashboard userRole={userRole.role}></DeliveryDashboard>
      )}
    </div>
  );
};

export default DashBoard;
