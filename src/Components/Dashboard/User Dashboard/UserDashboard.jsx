import { useContext } from "react";
import Sidebar from "../../Shared/Sidebar";
import { AuthContext } from "../../../Context/AuthProvider";
import { Outlet } from "react-router-dom";

const UserDashboard = ({ userRole }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex flex-row">
      {/* <h1>User Dashboard</h1> */}
      <Sidebar role={userRole}></Sidebar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserDashboard;
