import { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../assets/navbar-logo.svg";
import "../login/login.css";

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
const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
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
          padding: "3.2rem 3.2rem 0 3.2rem",
          border: { sm: "none", md: "1px solid #e0e0e0" },
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
            style={{ marginBottom: "4rem" }}
          />
          <Typography
            component="p"
            variant="p"
            className="fontPrompt font_weight_400 font_size_20 ">
            Don't worry! Enter your email below
          </Typography>
          <Box sx={{ width: "100%", marginTop: 2 }}>
            <TextField
              required
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={handleEmail}
              sx={{ marginBottom: "2rem", color: "#a0a0a0" }}
              InputLabelProps={{ style: { fontSize: "1.6rem" } }}
              InputProps={{ style: { fontSize: "1.6rem" } }}
              className="fontRoboto font_size_16 font_weight_400"
            />
            <Typography
              variant="p"
              className="fontRoboto font_size_16 font_weight_400">
              We'll send you and email with instructions on how to reset your
              password.
            </Typography>
            <Grid container alignItems="center">
              <Grid
                item
                sx={{
                  borderBottom: {
                    xs: "1px solid #e0e0e0",
                    md: 0,
                    width: "100%",
                  },
                }}>
                <Link to="/password-update" style={{ textDecoration: "none" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      margin: "3rem 0 3rem auto",
                      padding: "1.2rem 2.4rem 1.2rem 2.4rem ",
                      fontSize: "1.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#1a73e8",
                      lineHeight: "1.2 !important",
                      maxWidth: "101px",
                      display: "flex",
                    }}
                    fullWidth
                    className="fontPrompt font_weight_400 font_size_16">
                    Submit
                  </Button>
                </Link>
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
          alignItems: "center",
          marginTop: "3.2rem",
          marginLeft: { xs: "3.2rem", md: 0 },
        }}>
        <Typography
          variant="p"
          sx={{ color: "#a0a0a0", textAlign: "center" }}
          className="fontRoboto font_weight_400 font_size_16">
          Remembered your password?
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#1a73e8",
              marginLeft: "0.5rem",
            }}>
            login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default PasswordReset;
