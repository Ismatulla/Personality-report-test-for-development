import { Container, Box, Button, Typography } from "@mui/material";
import Contacts from "../../components/contancts/Contacts";
import PersonalityReport from "../../components/personality-report/PersonalityReport";
import leftArrow from "../../assets/arrow-to-left.svg";
import "./report.css";
import { useState } from "react";

const Report = () => {
  const [toggleClass, setToggleClass] = useState(false);
  const handleClass = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <>
      {/* mobile  */}
      {!toggleClass && (
        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
              width: "100%",
              background: "#FFF",
              padding: " 18px 0 18px 32px",
            },
            alignItems: "center",
            gap: "1.4rem",
          }}>
          <Button
            onClick={handleClass}
            sx={{
              borderRadius: "4px",
              minWidth: "40px !important",
              height: "40px ",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#f2f2f2",
            }}
            className="#f2f2f2">
            <img src={leftArrow} alt="left arrow" />
          </Button>
          <Typography
            variant="h6"
            className="fontPrompt font_weight_700 font_size_16"
            sx={{
              color: "#1a73e8",
              cursor: "pointer",
            }}>
            Personality report{" "}
          </Typography>
        </Box>
      )}
      {/* end of mobile */}

      <Container className="reportContainer ">
        <Box
          className={`contacts ${
            !toggleClass && "not-active"
          }`}>
          <Contacts />
        </Box>
        <Box
          className={`personalityReport ${
            toggleClass && "not-active"
          }`}>
          <PersonalityReport />
        </Box>
      </Container>
    </>
  );
};

export default Report;
