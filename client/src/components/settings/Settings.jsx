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
} from "@mui/material";

// tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleUsername = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  return (
    <Container
      sx={{
        maxWidth: "1280 !important",
        maxHeight: "595px",
        padding: "0 !important",
        marginTop: "8rem",
      }}>
      <Paper
        sx={{
          boxShadow: 0,
          maxWidth: "416px !important",
        }}>
        <Box
          component="form"
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}>
          <Typography
            component="p"
            variant="p"
            className="fontPrompt font_weight_400 font_size_32 "
            sx={{ marginBottom: "14px" }}>
            Settings
          </Typography>
          <Typography
            variant="p"
            className="fontPrompt font_size_20 font_weight_400"
            sx={{ color: "#797979", marginTop: "3rem" }}>
            Reset your password
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
              className="fontRoboto font_size_16 font_weight_400"
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
              className="fontRoboto font_size_16 font_weight_400"
            />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  cursor: "pointer",
                }}></Grid>
              <Grid item>
                <Link to="/">
                  <Button
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
                    Reset Password
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <ToastContainer />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Settings;
