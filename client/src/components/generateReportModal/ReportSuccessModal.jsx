import reportTick from "../../assets/reportTick.svg";
import { Container, Typography, Button } from "@mui/material";
import arrow from "../../assets/arrow1.svg";
import { useDispatch } from "react-redux";
import {
  successOpenAction,
  waitingOpenAction,
} from "../../reducers/reportModalSlice";

const ReportSuccessModal = () => {
  const dispatch = useDispatch();
  const handleAllActions = () => {
    dispatch(successOpenAction(false));
    dispatch(waitingOpenAction(false));
  };

  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.3s ease",
        position: "absolute",
        padding: "0 32px",
        bottom: 0,
        left: 0,
        right: 0,
        background: "white",
        zIndex: 1,
      }}>
      <img
        src={reportTick}
        alt="not found"
        width="128px"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "80px auto  36px auto",
        }}
      />
      <Typography
        variant="h4"
        component="h4"
        className="fontPrompt font_weight_400 font_size_16 "
        sx={{ lineHeight: "24px", color: "black" }}>
        We’ve successfully compiled a report based on the information we’ve
        gathered.{" "}
      </Typography>
      <Button
        onClick={handleAllActions}
        variant="contained"
        sx={{
          textTransform: "none",
          marginTop: "40px",
          padding: "2.2rem 2.4rem ",
          fontSize: "1.5rem",
          borderRadius: "8px",
          backgroundColor: "#1a73e8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.55rem",
          maxWidth: { xs: "100%", md: "380px" },
          lineHeight: "2.4rem",
        }}
        fullWidth
        className="fontPrompt font_weight_400 font_size_16">
        <Typography
          variant="p"
          className="fontPrompt font_weight_700 font_size_16 white_text"
          sx={{ display: "flex", gap: "1rem" }}>
          Your report is ready
          <span>
            <img src={arrow} alt="arrow" width="100%" height="100%" />
          </span>
        </Typography>
      </Button>
    </Container>
  );
};

export default ReportSuccessModal;
