import { Navigate, Outlet } from "react-router-dom";
import { getAccessToken } from "../../utils/localStorage";
const PrivateRoute = () => {
  const accessToken = getAccessToken();
  const isLoggedIn = accessToken !== null;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
