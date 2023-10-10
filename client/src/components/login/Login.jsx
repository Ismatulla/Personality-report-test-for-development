import { useState } from "react";
import instance from "../../utils/api";
import { setRefreshToken } from "../../utils/localStorage";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../../assets/navbar-logo.svg";
import "./login.css";
import googleLogo from "../../assets/devicon_google.svg";
import linkedinLogo from "../../assets/devicon_linkedin.svg";

// MUI components
import {
  Box,
  TextField,
  Container,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

// tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const response = await instance.post("/login", loginData);
      setRefreshToken(response.data.refreshToken);
      console.log("Login successful:", response.data);
      navigate("/generate-report");
    } catch (error) {
      console.error("Login Error:", error.response.data);
    }
  };
  return (
    <Container
      sx={{
        margin: "4rem auto",
        maxWidth: "448px !important",
        maxHeight: "595px",
        padding: "0 !important",
      }}>
      <Paper
        sx={{
          boxShadow: 0,
          border: { xs: "none", md: "1px solid #e0e0e0" },
          padding: "3.2rem 3.2rem 0 3.2rem",
          borderRadius: "7px",
        }}>
        <Box
          component="form"
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <img
            src={navLogo}
            alt="not found"
            width="80px"
            height="80px"
            style={{ marginBottom: "2rem" }}
          />
          <Typography
            component="p"
            variant="p"
            className="fontPrompt font_weight_400 font_size_20 "
            sx={{ marginBottom: "14px" }}>
            Login using
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Button className="auth_btns fontPrompt font_weight_400 font_size_16">
                <img src={googleLogo} alt="google logo" />
                <Typography variant="p" style={{ marginLeft: "1rem" }}>
                  {" "}
                  Google
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button className="auth_btns fontPrompt font_weight_400 font_size_16">
                <img src={linkedinLogo} alt="linkedin logo" />
                <Typography variant="p" style={{ marginLeft: "1rem" }}>
                  LinkedIn
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            sx={{ marginTop: "2rem", width: "100%" }}>
            <Grid item xs={5.5}>
              <Box
                sx={{
                  borderTop: "1px solid #E0E0E0",
                  width: "100%",
                  display: "block",
                }}></Box>
            </Grid>
            <Grid item xs={1}>
              <Box sx={{ textAlign: "center" }}>
                {" "}
                <Typography
                  variant="p"
                  className="fontRoboto font_weight_500 font_size_14"
                  sx={{ color: "#a0a0a0" }}>
                  OR
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5.5}>
              <Box
                sx={{
                  borderTop: "1px solid #E0E0E0",
                  width: "100%",
                  display: "block !important",
                }}></Box>
            </Grid>
          </Grid>
          <Typography
            variant="p"
            className="fontPrompt font_weight_400 font_size_20 font_weight_400"
            sx={{ color: "#000000", marginTop: "3rem" }}>
            Credentials
          </Typography>
          <Box sx={{ width: "100%", marginTop: 2 }}>
            <TextField
              required
              fullWidth
              label="Username"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
              sx={{ marginBottom: "2rem", color: "#a0a0a0" }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              InputProps={{ style: { fontSize: "1.6rem" } }}
              className="fontRoboto font_size_16 font_weight_400"
            />

            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              sx={{ marginBottom: "2rem", color: "#a0a0a0" }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              InputProps={{ style: { fontSize: "1.6rem" } }}
              className="fontRoboto font_size_16 font_weight_400"
            />
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ borderBottom: "1px solid #e0e0e0 " }}>
              <Grid
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  cursor: "pointer",
                }}>
                <input
                  type="checkbox"
                  id="checking"
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "4px",
                    border: "1.5px solid #797979",
                    cursor: "pointer",
                  }}
                />
                <label
                  htmlFor="checking"
                  className="fontRoboto font_weight_400 font_size_16"
                  style={{ color: "#a0a0a0", cursor: "pointer" }}>
                  Remember me
                </label>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleLogin}
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    margin: "3rem 0",
                    padding: "1.2rem 2.4rem 1.2rem 2.4rem ",
                    fontSize: "1.5rem",
                    borderRadius: "4px",
                    backgroundColor: "#1a73e8",
                    lineHeight: "1.2 !important",
                  }}
                  fullWidth
                  className="fontPrompt font_weight_400 font_size_16">
                  Login
                </Button>
              </Grid>
            </Grid>
            <ToastContainer />
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: "3.2rem ", md: "3.2rem 0 3.2rem " },
        }}>
        <Typography
          variant="p"
          sx={{
            color: "#a0a0a0",
            textAlign: "center",
          }}
          className="fontRoboto font_weight_400 font_size_16">
          Don't have an account with us?
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              color: "#1a73e8",
              marginLeft: "0.5rem",
            }}>
            Signup
          </Link>
        </Typography>
        <Link to="/password-reset" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            className="fontRoboto font_weight_400 font_size_16"
            sx={{ color: "#ed1c24", marginTop: { xs: "1rem", md: 0 } }}>
            {" "}
            Forgot Password ?
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
