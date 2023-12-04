import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import ErrorPage from "../Pages/ErrorPage";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import DashBoard from "../Layout/DashBoard";
import PrivateRoutes from "./PrivateRoutes";
import RestrictedRoutes from "./RestrictedRoutes";
import Profile from "../Components/Dashboard/User Dashboard/Profile";
import BookaParcel from "../Components/Dashboard/User Dashboard/BookaParcel";

const url = "http://localhost:5000";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout></UserLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: (
          <RestrictedRoutes>
            <Login></Login>
          </RestrictedRoutes>
        ),
      },
      {
        path: "/registration",
        element: (
          <RestrictedRoutes>
            <Registration></Registration>
          </RestrictedRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    loader: () => fetch(`${url}/userrole`),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "bookParcel",
        element: <BookaParcel></BookaParcel>,
      },
      {
        path: "myParcel",
        element: <BookaParcel></BookaParcel>,
      },
    ],
  },
]);

export default customRoutes;
