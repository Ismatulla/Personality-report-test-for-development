import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import "./btn.css";
const SwitchButton = ({ toggleSwitchHandler }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    toggleSwitchHandler(toggle);
  };
  return (
    <Box
      sx={{
        borderRadius: "6px",
        background: "#e0e0e0",
        width: "184px",
        border: "2px solid #e0e0e0",
        position: "relative",
        marginTop: "2rem",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        {" "}
        <Typography
          variant="h1"
          sx={{
            padding: "11px 21px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={`fontPrompt font_weight_400 font_size_20  btn btn-blue ${
            toggle == true ? "btn-active" : "btn-not-active"
          }`}>
          {toggle === true ? "DISC" : "Map"}
        </Typography>
        <Button
          onClick={handleToggle}
          className="fontPrompt font_weight_400 font_size_20"
          sx={{
            padding: "11px 21px",
            color: "black",
          }}>
          Map
        </Button>
        <Button
          onClick={handleToggle}
          className="fontPrompt font_weight_400 font_size_20"
          sx={{
            padding: "11px 24px",
            color: "black",
          }}>
          DISC
        </Button>
      </div>
    </Box>
  );
};

export default SwitchButton;
