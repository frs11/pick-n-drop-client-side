import { Outlet } from "react-router-dom";
import Sidebar from "../../Shared/Sidebar";

const AdminDashboard = ({ userRole }) => {
  return (
    <div className="flex flex-row">
      <Sidebar role={userRole}></Sidebar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminDashboard;
