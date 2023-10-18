import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../../assets/navbar-logo.svg";
import "../login/login.css";
import googleLogo from "../../assets/devicon_google.svg";
import linkedinLogo from "../../assets/devicon_linkedin.svg";
import instance from "../../utils/api";

// MUI components
import {
  Box,
  TextField,
  Container,
  Button,
  Typography,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const notifySuccess = () =>
    toast.success(
      "Your account has been created successfully. You can now login",
      {
        theme: "colored",
        style: {
          fontSize: "1.5rem",
        },
      }
    );
  const notifyError = () =>
    toast.error("please fill all mandatory fields!", {
      theme: "colored",
      style: {
        fontSize: "1.5rem",
      },
    });
  const [userData, setuserData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setuserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post("/users/signup", userData);

      if (Object.keys(userData).length !== 0) {
        notifySuccess();
      }

      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      notifyError();
      if (Object.keys(userData).length !== 0) {
        console.log("Signup Error:", error.response.data);
      }
    }
  };

  return (
    <Container
      sx={{
        margin: { xs: "0 auto", md: "8rem auto" },
        maxWidth: "448px !important",
        maxHeight: "832px !important",
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
            className="fontPrompt font_weight_400 font_size_20"
            sx={{ color: "#000000", marginTop: "3rem" }}>
            Create a new account
          </Typography>
          <Box
            component="form"
            sx={{ width: "100%", marginTop: 2 }}
            onSubmit={handleSignUp}>
            <TextField
              required
              fullWidth
              label="Username"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              sx={{ marginBottom: "2rem", color: "#a0a0a0" }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              InputProps={{ style: { fontSize: "1.6rem" } }}
              className="fontPrompt font_weight_400 font_size_16"
            />
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              value={userData.email}
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
              value={userData.password}
              onChange={handleInputChange}
              sx={{ marginBottom: "2rem", color: "#a0a0a0" }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              InputProps={{ style: { fontSize: "1.6rem" } }}
              className="fontPrompt font_weight_400 font_size_16"
            />
            <TextField
              required
              fullWidth
              name="reEnterPassword"
              label="Re-enter Password"
              type="password"
              onChange={handleInputChange}
              sx={{ marginBottom: "2rem", color: "#a0a0a0" }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              InputProps={{ style: { fontSize: "1.6rem" } }}
              className="fontPrompt font_weight_400 font_size_16"
            />

            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                className="fontRoboto font_weight_400 font_size_16">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                name="gender"
                onChange={handleInputChange}
                className="fontRoboto font_weight_400 font_size_16">
                <MenuItem
                  value="Male"
                  className="fontRoboto font_weight_400 font_size_16">
                  Male
                </MenuItem>
                <MenuItem
                  value="Female"
                  className="fontRoboto font_weight_400 font_size_16">
                  Female
                </MenuItem>
                <MenuItem
                  value="Others"
                  className="fontRoboto font_weight_400 font_size_16">
                  Others
                </MenuItem>
              </Select>
            </FormControl>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid
                item
                sx={{
                  width: "100%",
                  borderBottom: { xs: "1px solid #e0e0e0", md: "none" },
                }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    margin: "4rem 0 4rem auto",
                    padding: "1rem 2rem 1rem 2rem ",
                    fontSize: "1.5rem",
                    borderRadius: "4px",
                    backgroundColor: "#1a73e8",
                    lineHeight: "1.2 !important",
                    maxWidth: "169px",
                    display: "flex",
                  }}
                  fullWidth
                  className="fontPrompt font_weight_400 font_size_16">
                  Create Account
                </Button>
              </Grid>
            </Grid>
            <ToastContainer position="top-right" />
          </Box>
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: { xs: "4rem 0 0 3rem ", md: "4rem 0 0 0" },
        }}>
        <Typography
          variant="h6"
          sx={{ color: "#a0a0a0", textAlign: "center" }}
          className="fontRoboto font_weight_400 font_size_16">
          Already have an account with us?
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#1a73e8",
              marginLeft: "0.5rem",
            }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
