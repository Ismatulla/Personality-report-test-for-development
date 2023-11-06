import { Box, Typography, Button } from "@mui/material";
import { getAccessToken } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

export default function NotFound({errorInfo}) {
  const accessToken = getAccessToken();
  const isLoggedIn = accessToken !== null;
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (isLoggedIn) {
      navigate("/generate-report");
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: "2rem",
      }}>
      <Typography
        variant="h1"
        className=" font_size_48 font_weight_700 fontPrompt black-10">
        404
      </Typography>
      <Typography
        variant="h6"
        className=" font_size_48 font_weight_700 fontPrompt black-10">
      {errorInfo}
      </Typography>
      <Button
        onClick={handleRedirect}
        variant="contained"
        className=" font_size_16 font_weight_500 fontPrompt black-10">
        Back Home
      </Button>
    </Box>
  );
}
