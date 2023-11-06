import React from "react";
import { Box } from "@mui/material";
import "./characterProgressBar.css";

const CharacterProgressbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "3px",
      }}>
      <div className="progressOpenCircle"></div>
      <div className="progressLine"></div>
      <div className="progressOpenCircle"></div>
      <div className="progressLine"></div>
      <div className="progressOpenCircle"></div>
      <div className="progressLine"></div>
    </Box>
  );
};

export default CharacterProgressbar;
