import { useEffect, useState } from "react";
import instance from "../../utils/api";
import {
  setRefreshToken,
  setAccessToken,
  getAccessToken,
  getRefreshToken,
  getEmail,
  setEmail,
} from "../../utils/localStorage";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../../assets/navbar-logo.svg";
import "./login.css";
import { CircularProgress } from "@mui/material";

// redux toolkit import
//
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const [credential, setCredential] = useState("");

  // tokens
  const getAccess = getAccessToken();
  const getEmails = getEmail();

  const notifyError = (errorMessage) =>
    toast.error(`${errorMessage}`, {
      theme: "colored",
      style: {
        fontSize: "1.5rem",
      },
    });

  //
  useEffect(() => {
    if (getAccess && getEmails) {
      navigate(`/generate-report?email=${getEmails}`);
    }
  }, []);
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };
  // login with form
  const handleLogin = async (e) => {
    e.preventDefault();
    setEmail(loginData.email);
    try {
      setIsLoading(true);
      const response = await instance.post("/users/api/token/", loginData);
      console.log(response);
      if (response?.data) {
        setRefreshToken(response.data.refresh);
        setAccessToken(response.data.access);
      }
      setIsLoading(false);
      console.log(response.data);
      navigate(`/generate-report?email=${loginData.email}`);
    } catch (error) {
      setLoginData(false);
      if (Object.keys(loginData).length !== 0) {
        notifyError(error.response.statusText?.toLowerCase());
      }
      setIsLoading(false);
      console.error("Login Error:", error);
    }
  };
  //
  // login with google
  const handleCallbackResponse = (response) => {
    setAccessToken(response.credential);
    setCredential(response.credential);
    console.log(response.credential);
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "515811412387-rn7q0kgi17ekqsj3kqpv3p0d8l6caosn.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  const handleGoogleLogin = async () => {
    try {
      if (credential) {
        setIsGoogleLoading(true);
        const response = await axios.post(
          "https://thiernobalde95.pythonanywhere.com/users/google/",
          {
            auth_token: credential,
          }
        );
        if (response.status == 200) {
          setEmail(response.data.email);
          setAccessToken(response.data.tokens.access);
          setRefreshToken(response.data.tokens.refresh);
          console.log(response.data);
          const email = getEmail();
          if (email) {
            navigate(`/generate-report?email=${email}`);
          }
        }
        setIsGoogleLoading(false);
      }
    } catch (error) {
      setIsGoogleLoading(false);
      notifyError(error.response.statusText?.toLowerCase());
    }
  };
  // end of google login
  useEffect(() => {
    handleGoogleLogin();
  }, [credential]);
  return (
    <>
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
              <Grid item xs={12}>
                {/* <Button className="auth_btns fontPrompt font_weight_400 font_size_16"> */}
                {/* <img src={googleLogo} alt="google logo" /> */}
                {/* <Typography variant="p" style={{ marginLeft: "1rem" }}> */}
                {/* {" "} */}
                {/* Google */}
                {/* </Typography> */}
                {/* </Button> */}
                {isGoogleLoading ? (
                  <Box sx={{ display: "fex", justifyContent: "center" }}>
                    {" "}
                    <CircularProgress />
                  </Box>
                ) : (
                  <div id="signInDiv" style={{ width: "100%" }}></div>
                )}
              </Grid>
              {/* <Grid item xs={6}> */}
              {/* <Button className="auth_btns fontPrompt font_weight_400 font_size_16"> */}
              {/* <img src={linkedinLogo} alt="linkedin logo" /> */}
              {/* <Typography variant="p" style={{ marginLeft: "1rem" }}> */}
              {/* LinkedIn */}
              {/* </Typography> */}
              {/* </Button> */}
              {/* </Grid> */}
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
            <Box
              component="form"
              sx={{ width: "100%", marginTop: 2 }}
              onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                sx={{ marginBottom: "2rem", color: "#a0a0a0" }}
                InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                InputProps={{ style: { fontSize: "1.6rem" } }}
                className="fontPrompt font_weight_400 font_size_16"
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
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
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
                    {isLoading ? <CircularProgress /> : "Login"}
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
    </>
  );
};

export default Login;
