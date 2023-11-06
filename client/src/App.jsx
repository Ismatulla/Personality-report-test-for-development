// private routing and react router dom
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

import { useEffect } from "react";
// components
import Navbar from "./components/nav/Navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import PasswordReset from "./components/passwordReset/PasswordReset";
import PasswordUpdate from "./components/passwordUpdate/PasswordUpdate";
import Footer from "./components/footer/Footer";
import Settings from "./components/settings/Settings";
import NotFound from "./components/notfound/NotFound";

// pages
import Home from "./pages/home/Home";
import Report from "./pages/report/Report";

// global state
import { useSelector } from "react-redux";

// buffering functions
import ReportSuccessModal from "./components/generateReportModal/ReportSuccessModal";
import ReportWaitingModal from "./components/generateReportModal/ReportWaitingModal";
//

// local storage
import { getAccessToken } from "./utils/localStorage";

function App() {
  const location = useLocation();
  const successWindow = useSelector((state) => state.reportModal.isSuccesOpen);
  const waitingWindow = useSelector((state) => state.reportModal.isWaitingOpen);
  const navigate = useNavigate();
  // loal storage
  const accessToken = getAccessToken();
  //
  useEffect(() => {
    accessToken === null ? navigate("/") : navigate("/generate-report");
  }, []);
  return (
    <>
      {successWindow && <ReportSuccessModal />}
      {waitingWindow && <ReportWaitingModal />}
      {!successWindow && !waitingWindow && (
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
            <Route
              path="*"
              element={
                <NotFound errorInfo="  The page you’re looking for doesn’t exist." />
              }
            />
            {/* */}
          </Routes>
          {((location.pathname && location.pathname === "/generate-report") ||
            location.pathname === "/reports") && <Footer />}
        </div>
      )}
    </>
  );
}

export default App;
