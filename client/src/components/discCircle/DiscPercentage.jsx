import { Box, Typography } from "@mui/material";

const DiscPercentage = ({ widthPercent }) => {
  return (
    <Box sx={{ width: "168px", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          gap: "2.4rem",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
          marginTop: "12rem",
        }}>
        <div style={{ display: "flex", gap: "2rem", width: "100%" }}>
          <Typography
            variant="h1"
            className="fontRoboto font_weight_700 font_size_20"
            sx={{ color: "#ed1c24" }}>
            D
          </Typography>
          <div
            style={{
              borderRadius: "4px",
              backgroundColor: "#f2f2f2",
              width: "100%",
            }}>
            <span
              style={{
                display: "block",
                width: `${widthPercent?.disc_red}%`,
                background: "rgb(237, 28, 36)",
                height: "24px",
                overflow: "hidden",
                borderRadius: "4px",
              }}></span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "2.7rem", width: "100%" }}>
          <Typography
            variant="h1"
            className="fontRoboto font_weight_700 font_size_20"
            sx={{ color: "#ffd656" }}>
            I
          </Typography>
          <div
            style={{
              borderRadius: "4px",
              backgroundColor: "#f2f2f2",
              width: "100%",
            }}>
            <span
              style={{
                display: "block",
                width: `${widthPercent?.disc_yellow}%`,
                background: "#ffd656",
                height: "24px",
                overflow: "hidden",
                borderRadius: "4px",
              }}></span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "2rem", width: "100%" }}>
          <Typography
            variant="h1"
            className="fontRoboto font_weight_700 font_size_20"
            sx={{ color: "#00ac4e" }}>
            S
          </Typography>
          <div
            style={{
              borderRadius: "4px",
              backgroundColor: "#f2f2f2",
              width: "100%",
            }}>
            <span
              style={{
                display: "block",
                width: `${widthPercent?.disc_green}%`,
                background: "#00ac4e",
                height: "24px",
                overflow: "hidden",
                borderRadius: "4px",
              }}></span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "2rem", width: "100%" }}>
          <Typography
            variant="h1"
            className="fontRoboto font_weight_700 font_size_20"
            sx={{ color: "#1a73e8" }}>
            C
          </Typography>
          <div
            style={{
              borderRadius: "4px",
              backgroundColor: "#f2f2f2",
              width: "100%",
            }}>
            <span
              style={{
                display: "block",
                width: `${widthPercent?.disc_blue}%`,
                background: "#1a73e8",
                height: "24px",
                overflow: "hidden",
                borderRadius: "4px",
              }}></span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default DiscPercentage;
