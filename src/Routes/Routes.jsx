import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import ErrorPage from "../Pages/ErrorPage";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

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
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default customRoutes;
