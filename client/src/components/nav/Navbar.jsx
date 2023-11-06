import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import navbarLogo from "../../assets/navbar-logo.svg";
import profilePic from "../../assets/profile-pic.svg";
import translateLogo from "../../assets/translate-logo.svg";

// global state case
import { useSelector, useDispatch } from "react-redux";
import { getAllProfData } from "../../reducers/profileDataSlice";
import { getIdSuccess, clearTokenSuccess } from "../../reducers/authSlice";
//  end of global state case
// react tostify
import { ToastContainer, toast } from "react-toastify";
//

import {
  clearRefreshToken,
  clearAccessToken,
  clearId,
} from "../../utils/localStorage";
import instance from "../../utils/api";
import "./navbar.css";
// MUI components
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Tooltip,
  Avatar,
  Button,
} from "@mui/material";

const settings = ["Reports", "Settings", "Logout"];
const profiles = ["English (en)", "Dutch (nl)"];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenProfile = (event) => {
    setUserProfile(event.currentTarget);
  };

  // get email  token and dispatching all Data to  global state
  const dispatch = useDispatch();
  const { tokenSuccess } = useSelector((state) => state.auth);
  // tostify message
  const notifyError = (errorMessage) =>
    toast.error(`${errorMessage}`, {
      theme: "colored",
      style: {
        fontSize: "1.5rem",
      },
    });
  //
  // get all contacts
  const getAllContacts = async () => {
    try {
      const response = await instance.get("/users/linkedin-url");

      if (response.status == 200 && response.data.length !== 0) {
        dispatch(getAllProfData(response.data));
        dispatch(getIdSuccess(response.data[0].id));
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        dispatch(clearTokenSuccess());
        setTimeout(() => {
          notifyError("Your session expired ,please login again !");
        }, 500);
      }
    }
  };

  useEffect(() => {
    if (tokenSuccess) {
      getAllContacts();
    }
  }, [tokenSuccess]);

  const { allProfData } = useSelector((state) => state.data);

  const handleCloseUserMenu = (settings) => {
    if (settings) {
      if (settings === "Logout") {
        clearRefreshToken();
        clearAccessToken();
        clearId();
        dispatch(clearTokenSuccess());
        navigate("/");
      }
      if (settings === "Reports") {
        if (allProfData.length == 0) {
          setAnchorElUser(null);
          navigate("/generate-report");
        } else {
          const id = allProfData[0]?.id;
          const chartype = allProfData[0]?.chartype;
          navigate(`/reports?id=${id}&chartype=${chartype}`);
        }
      }
      if (settings === "Settings") {
        navigate("/settings");
      }
    }

    setAnchorElUser(null);
  };

  const handleCloseProfile = () => {
    setUserProfile(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: { xs: "none", md: "0px 4px 10px 0px rgba(0, 0, 0, 0.05)" },
      }}
      className="white_background">
      <Container
        className="navbar_container"
        sx={{ maxWidth: "1280px !important" }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "80px !important",
            minHeight: "0 !important",
            padding: { xs: "32px", md: "0" },
          }}>
          <Link to={tokenSuccess !== null ? "/generate-report" : "/"}>
            <Typography sx={{ mr: 1, display: "block" }}>
              {tokenSuccess !== null && <img src={navbarLogo} alt="" />}
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Tooltip>
              <IconButton
                onClick={handleOpenProfile}
                sx={{
                  p: 0,
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#f2f2f2",
                  marginRight: "1.5rem",
                }}>
                <Avatar alt="your profile" src={translateLogo} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={userProfile}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(userProfile)}
              onClose={handleCloseProfile}>
              {profiles.map((profile) => (
                <MenuItem
                  key={profile}
                  onClick={() => handleCloseProfile(profile)}>
                  <Typography
                    textAlign="center"
                    className="grey_text_900 font_weight_400 fontPrompt font_size_16">
                    {profile}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {tokenSuccess !== null && (
              <Button
                sx={{ padding: "0 !important" }}
                onClick={handleOpenUserMenu}>
                <img
                  src={profilePic}
                  alt="profilePic"
                  width="48px"
                  height="48px"
                />
              </Button>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}>
                  <Typography
                    textAlign="center"
                    className="grey_text_900 font_weight_400 fontPrompt font_size_16">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <ToastContainer />
    </AppBar>
  );
}
export default Navbar;
