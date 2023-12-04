import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../Context/AuthProvider";

const RestrictedRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

RestrictedRoutes.propTypes = {
  children: PropTypes.node,
};

export default RestrictedRoutes;
