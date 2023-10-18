import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import PasswordReset from "./components/passwordReset/PasswordReset";
import PasswordUpdate from "./components/passwordUpdate/PasswordUpdate";
import Home from "./pages/home/Home";
import Report from "./pages/report/Report";
import Footer from "./components/footer/Footer";
import Settings from "./components/settings/Settings";

import PrivateRoute from "./components/privateRoute/PrivateRoute";
import NotFound from "./components/notfound/NotFound";

function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/password-update" element={<PasswordUpdate />} />
        <Route path="/settings" element={<Settings />} />

        {/* Private route */}
        <Route path="" element={<PrivateRoute />}>
          {" "}
          <Route path="/generate-report" element={<Home />} />
          <Route path="/reports" element={<Report />} />
        </Route>

        {/* if user  tries wrong url */}
        <Route path="*" element={<NotFound />} />
        {/* */}
      </Routes>
      {((location.pathname && location.pathname === "/generate-report") ||
        location.pathname === "/reports") && <Footer />}
    </div>
  );
}

export default App;
