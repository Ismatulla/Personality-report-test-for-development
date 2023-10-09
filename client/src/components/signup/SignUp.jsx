import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../../assets/navbar-logo.svg";
import "../login/login.css";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

// tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [email, setEmail] = useState("");
  const [genderSelection, setGenderSelection] = useState("");

  const handleGenderSelection = (e) => {
    const { value } = e.target;
    setGenderSelection(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleUsername = (e) => {
    const { value } = e.target;
    setUsername(value);
  };
  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleReEnterPassword = (e) => {
    const { value } = e.target;
    setReEnterPassword(value);
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
            className="fontPrompt font_weight_400 font_size_20"
            sx={{ color: "#000000", marginTop: "3rem" }}>
            Create a new account
          </Typography>
          <Box sx={{ width: "100%", marginTop: 2 }}>
            <TextField
              required
              fullWidth
              label="Username"
              value={username}
              onChange={handleUsername}
              sx={{ marginBottom: "2rem", color: "#a0a0a0" }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              InputProps={{ style: { fontSize: "1.6rem" } }}
              className="fontPrompt font_weight_400 font_size_16"
            />
            <TextField
              required
              fullWidth
              label="Email"
              value={email}
              onChange={handleEmail}
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
              value={password}
              onChange={handlePassword}
              sx={{ marginBottom: "2rem", color: "#a0a0a0" }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              InputProps={{ style: { fontSize: "1.6rem" } }}
              className="fontPrompt font_weight_400 font_size_16"
            />
            <TextField
              required
              fullWidth
              label="Re-enter Password"
              type="password"
              value={reEnterPassword}
              onChange={handleReEnterPassword}
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
                value={genderSelection}
                label="Gender"
                onChange={handleGenderSelection}
                className="fontRoboto font_weight_400 font_size_16">
                <MenuItem
                  value={10}
                  className="fontRoboto font_weight_400 font_size_16">
                  Male
                </MenuItem>
                <MenuItem
                  value={20}
                  className="fontRoboto font_weight_400 font_size_16">
                  Female
                </MenuItem>
                <MenuItem
                  value={30}
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
            <ToastContainer />
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
