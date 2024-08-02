import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token === undefined) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedRoute;
