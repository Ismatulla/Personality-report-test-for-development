import { Box } from "@mui/material";
import "./characterProgressBarMobile.css";

const CharacterProgressbarMobile = ({ visibilityIndex }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2px",
        marginTop: "0.5rem",
      }}>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 0
            ? "active"
            : "" || visibilityIndex > 0
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLineMobile ${
          visibilityIndex >= 1 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 1
            ? "active"
            : "" || visibilityIndex >= 1
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLineMobile ${
          visibilityIndex >= 2 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 2
            ? "active"
            : "" || visibilityIndex >= 2
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLineMobile ${
          visibilityIndex >= 3 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 3
            ? "active"
            : "" || visibilityIndex >= 3
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLineMobile ${
          visibilityIndex >= 4 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 4
            ? "active"
            : "" || visibilityIndex >= 4
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLineMobile ${
          visibilityIndex >= 5 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 5
            ? "active"
            : "" || visibilityIndex >= 5
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLineMobile ${
          visibilityIndex >= 6 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 6
            ? "active"
            : "" || visibilityIndex >= 6
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLineMobile ${
          visibilityIndex >= 7 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 7
            ? "active"
            : "" || visibilityIndex >= 7
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLineMobile ${
          visibilityIndex >= 8 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 8
            ? "active"
            : "" || visibilityIndex >= 8
            ? "crossed"
            : ""
        }`}></div>
      <div
        className={`progressLineMobile ${
          visibilityIndex >= 9 ? "active" : ""
        }`}></div>
      <div
        className={`progressOpenCircleMobile ${
          visibilityIndex == 9
            ? "active"
            : "" || visibilityIndex >= 9
            ? "crossed"
            : ""
        }`}></div>
    </Box>
  );
};

export default CharacterProgressbarMobile;
