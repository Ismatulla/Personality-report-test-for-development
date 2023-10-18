import { Box, Typography } from "@mui/material";
import close from "../../assets/close-cross-icon.svg";
const LoaderLogin = ({ text, logo }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: " rgba(0, 0, 0, 0.2)",
      }}>
      <Box
        sx={{
          borderRadius: "8px",
          background: "#fff",
          position: "relative",
          display: "flex",
          maxWidth: "600px",
          padding: "0 4rem",
          flexDirection: "column",
          boxShadow: 1,
        }}>
        <Typography
          variant="h1"
          sx={{ padding: "24px 0", display: "flex", alignItems: "flex-start" }}>
          <img src={logo} alt="logo" />
        </Typography>
        <Typography
          variant="div"
          sx={{
            position: "absolute",
            top: "12px",
            right: "12px",
            padding: "6px",
            background: "#f2f2f2",
            borderRadius: "4px",
            cursor: "pointer",
          }}>
          <img src={close} alt="close icon" width="100%" />
        </Typography>

        <Typography
          component="div"
          variant="h1"
          className="fontPrompt font_weight_400 font_size_20"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            color: "#000",
            paddingBottom: "6rem",
          }}>
          {text}
        </Typography>
      </Box>
    </div>
  );
};

export default LoaderLogin;
