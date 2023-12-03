import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layout/UserLayout";
import ErrorPage from "../Pages/ErrorPage";
import Homepage from "../Pages/Homepage";

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
    ],
  },
]);

export default customRoutes;
