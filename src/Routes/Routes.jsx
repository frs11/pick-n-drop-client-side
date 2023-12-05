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
import MyParcel from "../Components/Dashboard/User Dashboard/MyParcel";
import AllUsers from "../Components/Dashboard/Admin Dashboard/AllUsers";
import AllDeliveryman from "../Components/Dashboard/Admin Dashboard/AllDeliveryman";
import Allparcels from "../Components/Dashboard/Admin Dashboard/Allparcels";
import Statistics from "../Components/Dashboard/Admin Dashboard/Statistics";

// const url = "https://parcel-delivery-server-one.vercel.app";
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
        element: <MyParcel></MyParcel>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
        loader: () => fetch(`${url}/userrole`),
      },
      {
        path: "alldelivermen",
        element: <AllDeliveryman></AllDeliveryman>,
        loader: () => fetch(`${url}/userrole`),
      },
      {
        path: "allParcel",
        element: <Allparcels></Allparcels>,
        loader: () => fetch(`${url}/allparcels`),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default customRoutes;
