import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
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
import store from "./stores/store";
import { Provider } from "react-redux";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
function App() {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const location = useLocation();
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/generate-report" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/password-update" element={<PasswordUpdate />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        {((location.pathname && location.pathname === "/generate-report") ||
          location.pathname === "/reports") && <Footer />}
      </Provider>
    </div>
  );
}

export default App;
