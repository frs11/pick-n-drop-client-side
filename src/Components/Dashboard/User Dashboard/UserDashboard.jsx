import Sidebar from "../../Shared/Sidebar";
import { Outlet } from "react-router-dom";

const UserDashboard = ({ userRole }) => {
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
