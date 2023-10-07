import {useState} from "react";
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
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordUpdate = () => {
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    const {value} = e.target;
    setPassword(value);
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
          boxShadow: 1,
          padding: "3.2rem 3.2rem 0 3.2rem",
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
            style={{marginBottom: "4rem"}}
          />
          <Typography
            component="p"
            variant="p"
            className="fontPrompt font_weight_400 font_size_20 ">
            Reset your password
          </Typography>
          <Box sx={{width: "100%", marginTop: 2}}>
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={handlePassword}
              sx={{marginBottom: "2rem", color: "#a0a0a0"}}
              InputLabelProps={{style: {fontSize: "1.6rem"}}}
              InputProps={{style: {fontSize: "1.6rem"}}}
              className="fontRoboto font_size_16 font_weight_400"
            />
            <TextField
              required
              fullWidth
              label="Re-enter Password"
              type="password"
              value={password}
              onChange={handlePassword}
              sx={{marginBottom: "2rem", color: "#a0a0a0"}}
              InputLabelProps={{style: {fontSize: "1.6rem"}}}
              InputProps={{style: {fontSize: "1.6rem"}}}
              className="fontRoboto font_size_16 font_weight_400"
            />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item></Grid>
              <Grid item>
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
              </Grid>
            </Grid>
            <ToastContainer />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default PasswordUpdate;
