import {
  FaHome,
  FaList,
  FaPlus,
  FaRegStar,
  FaRegUser,
  FaUsers,
} from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from "react-router-dom";
const Sidebar = ({ role }) => {
  return (
    <div className="h-screen sticky top-0 py-12 px-5 w-2/12 flex flex-col text-white bg-indigo-700">
      {role === "admin" ? (
        <div className="flex flex-col space-y-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
                : "flex text-white items-center px-2 py-1 rounded"
            }
            to="users"
          >
            <span className="mr-2">
              <FaRegUser></FaRegUser>
            </span>{" "}
            All Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
                : "flex text-white items-center px-2 py-1 rounded"
            }
            to="alldelivermen"
          >
            <span className="mr-2">
              <FaUsers></FaUsers>
            </span>{" "}
            All Delivery Man
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
                : "flex text-white items-center px-2 py-1 rounded"
            }
            to="allParcel"
          >
            <span className="mr-2">
              <IoMdReorder />
            </span>{" "}
            All Parcels
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
                : "flex text-white items-center px-2 py-1 rounded"
            }
            to="statistics"
          >
            <span className="mr-2">
              <ImStatsDots />
            </span>{" "}
            Statistics
          </NavLink>
        </div>
      ) : role === "user" ? (
        <div className="flex flex-col space-y-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
                : "flex text-white items-center px-2 py-1 rounded"
            }
            to="profile"
          >
            <span className="mr-2">
              <FaRegUser></FaRegUser>
            </span>{" "}
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
                : "flex text-white items-center px-2 py-1 rounded"
            }
            to="bookParcel"
          >
            <span className="mr-2">
              <FaPlus></FaPlus>
            </span>{" "}
            Book a Parcel
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
                : "flex text-white items-center px-2 py-1 rounded"
            }
            to="myParcel"
          >
            <span className="mr-2">
              <IoMdReorder />
            </span>{" "}
            My Parcel
          </NavLink>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
                : "flex text-white items-center px-2 py-1 rounded"
            }
            to="deliveryList"
          >
            <span className="mr-2">
              <FaList></FaList>
            </span>{" "}
            Delivery List
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
                : "flex text-white items-center px-2 py-1 rounded"
            }
            to="myReviews"
          >
            <span className="mr-2">
              {" "}
              <FaRegStar></FaRegStar>{" "}
            </span>{" "}
            My Reviews
          </NavLink>
        </div>
      )}
      <div className="divider"></div>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex text-white items-center px-2 py-1 rounded bg-indigo-500 "
            : "flex text-white items-center px-2 py-1 rounded"
        }
        to="/"
      >
        <FaHome></FaHome> Home
      </NavLink>
    </div>
  );
};

export default Sidebar;
