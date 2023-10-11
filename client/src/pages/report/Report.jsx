import { Container, Box, Button, Typography } from "@mui/material";
import Contacts from "../../components/contancts/Contacts";
import PersonalityReport from "../../components/personality-report/PersonalityReport";
import leftArrow from "../../assets/arrow-to-left.svg";
import "./report.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import instance from "../../utils/api";

const Report = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");
  const [toggleClass, setToggleClass] = useState(false);
  const [data, setData] = useState([]);
  const [linkedinData, setLinkedinData] = useState({});
  const handleClass = () => {
    setToggleClass(!toggleClass);
  };
  const url = searchParams.get("url");

  const handleLinkedInUrl = async () => {
    try {
      const response = await instance.get(`linkedin-url?username=${username}`);
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLinkedInUrlPost = async () => {
    try {
      const response = await instance.post("linkedin-url", {
        link: url,
        username: username,
      });
      console.log(response.data);
      setLinkedinData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleLinkedInUrl();
    handleLinkedInUrlPost();
  }, []);
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
        <Box className={`contacts ${!toggleClass && "not-active"}`}>
          <Contacts data={data} />
        </Box>
        <Box className={`personalityReport ${toggleClass && "not-active"}`}>
          <PersonalityReport linkedinData={linkedinData} />
        </Box>
      </Container>
    </>
  );
};

export default Report;
