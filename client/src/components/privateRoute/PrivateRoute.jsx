import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element }) => {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <Route element={accessToken ? <Element /> : <Navigate to="/" replace />} />
  );
};

export default PrivateRoute;
