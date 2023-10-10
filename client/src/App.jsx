import { Container } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import PasswordReset from "./components/passwordReset/PasswordReset";
import PasswordUpdate from "./components/passwordUpdate/PasswordUpdate";
import Home from "./pages/home/Home";
import Report from "./pages/report/Report";
import Footer from "./components/footer/Footer";
import Settings from "./components/settings/Settings";

function App() {
  const location = useLocation();
  return (
    <div>
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
    </div>
  );
}

export default App;
