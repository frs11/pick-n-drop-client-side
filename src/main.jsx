import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Context/AuthProvider";
import customRoutes from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={customRoutes} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
