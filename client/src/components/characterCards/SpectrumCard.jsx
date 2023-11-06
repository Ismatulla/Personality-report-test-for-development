import { Typography, Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import NewDiscCircle from "../discCircle/NewDiscCircle";
import DiscPercentage from "../discCircle/DiscPercentage";
import SwitchButton from "../btns/SwitchButton";
import "./characterCard.css";

const SpectrumCard = () => {
  const { singleProfData } = useSelector((state) => state.data);
  const [toggle, setToggle] = useState(false);

  const toggleSwitchHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {" "}
      <Typography
        sx={{
          textAlign: "left",
          color: "#00ac4e",
          margin: "0 0 4rem 0",
        }}
        className="fontPrompt font_weight_600 font_size_20">
        Personality Spectrum
      </Typography>
      <Typography className="personReportChild" variant="h4">
        <Box
          sx={{
            width: { xs: "100%", md: "384px !important" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <div
            style={{
              width: "400px",
              height: "400px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              className={`${
                toggle === false ? "activeDisc" : "not-activeDisc"
              }`}>
              {" "}
              <NewDiscCircle />
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              className={`${
                toggle === false ? "not-activeDisc" : "activeDisc"
              }`}>
              {" "}
              <DiscPercentage widthPercent={singleProfData?.data} />
            </div>
          </div>
          <SwitchButton toggleSwitchHandler={toggleSwitchHandler} />
        </Box>
        <Box>
          <Box
            className="fontPrompt font_weight_400 font_size_48"
            sx={{ color: "black", marginBottom: "4rem" }}>
            {singleProfData?.data?.chartype}
          </Box>
          <Box className="fontRoboto font_weight_400 font_size_20">
            {singleProfData?.chars_data?.[1][2]}
          </Box>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "40px",
            }}>
            <Typography
              variant="h6"
              className="fontRoboto font_weight_400 font_size_16"
              sx={{
                color: "#797979",
                borderRadius: "31px",
                border: "1px solid #797979",
                padding: "6px",
              }}>
              Sociable
            </Typography>
            <Typography
              variant="h6"
              className="fontRoboto font_weight_400 font_size_16"
              sx={{
                color: "#797979",
                borderRadius: "31px",
                border: "1px solid #797979",
                padding: "6px",
              }}>
              Charismatic
            </Typography>
            <Typography
              variant="h6"
              className="fontRoboto font_weight_400 font_size_16"
              sx={{
                color: "#797979",
                borderRadius: "31px",
                border: "1px solid #797979",
                padding: "6px",
              }}>
              Adventurous
            </Typography>
          </div>
        </Box>
      </Typography>
    </div>
  );
};

export default SpectrumCard;
