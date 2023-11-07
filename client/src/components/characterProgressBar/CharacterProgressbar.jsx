import React from "react";
import { Box } from "@mui/material";
import "./characterProgressBar.css";

const CharacterProgressbar = ({ visibilityIndex }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2px",
        marginTop: "0.5rem",
        marginLeft: "4rem",
      }}>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 0
            ? "active"
            : "" || visibilityIndex > 0
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLine ${
          visibilityIndex >= 1 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 1
            ? "active"
            : "" || visibilityIndex >= 1
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLine ${
          visibilityIndex >= 2 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 2
            ? "active"
            : "" || visibilityIndex >= 2
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLine ${
          visibilityIndex >= 3 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 3
            ? "active"
            : "" || visibilityIndex >= 3
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLine ${
          visibilityIndex >= 4 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 4
            ? "active"
            : "" || visibilityIndex >= 4
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLine ${
          visibilityIndex >= 5 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 5
            ? "active"
            : "" || visibilityIndex >= 5
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLine ${
          visibilityIndex >= 6 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 6
            ? "active"
            : "" || visibilityIndex >= 6
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLine ${
          visibilityIndex >= 7 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 7
            ? "active"
            : "" || visibilityIndex >= 7
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLine ${
          visibilityIndex >= 8 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 8
            ? "active"
            : "" || visibilityIndex >= 8
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLine ${
          visibilityIndex >= 9 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircle ${
          visibilityIndex == 9
            ? "active"
            : "" || visibilityIndex >= 9
            ? "crossed"
            : ""
        }`}></div>
    </Box>
  );
};

export default CharacterProgressbar;
