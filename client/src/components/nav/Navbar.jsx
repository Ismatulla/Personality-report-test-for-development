import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import navbarLogo from "../../assets/navbar-logo.svg";
import profilePic from "../../assets/profile-pic.svg";
import translateLogo from "../../assets/translate-logo.svg";

import {
  clearRefreshToken,
  clearAccessToken,
  clearProfPic,
  clearEmail,
} from "../../utils/localStorage";
import { getAccessToken, getEmail } from "../../utils/localStorage";
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
  const [isReportLoading, setIsReportLoading] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const token = getAccessToken();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenProfile = (event) => {
    setUserProfile(event.currentTarget);
  };

  // get all contacts
  const email = getEmail();
  const getAllContacts = async () => {
    try {
      const response = await instance.get(`/users/linkedin-url?email=${email}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      getAllContacts();
    }
  }, [token]);

  const url = data && data[0]?.linkedin_url;
  const chartype = data && data[0]?.chartype;

  const handleCloseUserMenu = (settings) => {
    if (settings) {
      if (settings === "Logout") {
        clearRefreshToken();
        clearAccessToken();
        clearProfPic();
        clearEmail();
        navigate("/");
      }
      if (settings === "Reports") {
        if (data.length == 0) {
          setAnchorElUser(null);
          navigate(`/generate-report?email=${email}`);
        } else {
          navigate(`/reports?email=${email}&url=${url}&chartype=${chartype}`);
        }
      }
      if (settings === "Settings") {
        navigate("/settings");
      }
    }
    setAnchorElUser(null);
  };

  const handleCloseProfile = (userProfile) => {
    if (userProfile) {
      console.log(userProfile);
    }
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
          <Link to={token !== null ? `/generate-report?email=${email}` : "/"}>
            <Typography sx={{ mr: 1, display: "block" }}>
              {token !== null && <img src={navbarLogo} alt="" />}
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
            {token !== null && (
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
    </AppBar>
  );
}
export default Navbar;
