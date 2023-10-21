import reportTick from "../../assets/reportTick.svg";
import { Container, Typography } from "@mui/material";
const ReportSuccessModal = () => {
  return (
    <Container
      sx={{
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100vh",
        display: { md: "block", lg: "none" },
      }}>
      <img
        src={reportTick}
        alt="not found"
        width="128px"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px 0  36px 0",
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
    </Container>
  );
};

export default ReportSuccessModal;
