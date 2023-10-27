import {
  Container,
  Box,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import Contacts from "../../components/contancts/Contacts";
import instance from "../../utils/api";
import PersonalityReport from "../../components/personality-report/PersonalityReport";
import { useState, useEffect } from "react";
import "./report.css";
import { useLocation } from "react-router-dom";

import leftArrow from "../../assets/arrow-to-left.svg";
import ModalWindow from "../../components/loginModal/ModalWindow";

const Report = () => {
  const [isReportPageLoading, setIsReportPageLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const url = searchParams.get("url");
  const email = searchParams.get("email");
  const chartype = searchParams.get("chartype");

  const [toggleClass, setToggleClass] = useState(true);
  const [contact, setContact] = useState(false);

  const [data, setData] = useState([]);
  const [linkedinData, setLinkedinData] = useState({});

  const handleClass = () => {
    setToggleClass(!toggleClass);
    setContact(true);
  };

  const handleContact = (value) => {
    setContact(value);
    setToggleClass(true);
  };
  const getAllContacts = async () => {
    try {
      const response = await instance.get(`/users/linkedin-url?email=${email}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSingleReport = async () => {
    try {
      setIsReportPageLoading(true);
      const response = await instance.get(
        `/chartype/data-sender?chartype=${chartype}&url=${url}`
      );
      setLinkedinData(response.data);
      setIsReportPageLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllContacts();
  }, []);

  useEffect(() => {
    getSingleReport();
  }, [url]);
  console.log(linkedinData);
  return (
    <>
      {/* mobile  */}
      {toggleClass && (
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
        <Box className={`contacts ${contact ? "active" : "not-active"}`}>
          <Contacts data={data} handleContact={handleContact} />
        </Box>
        {isReportPageLoading ? (
          <Box
            sx={{
              height: "100vh",
              width: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {" "}
            <CircularProgress />
          </Box>
        ) : (
          <Box
            className={`personalityReport ${
              toggleClass ? "active" : "not-active"
            }`}>
            <PersonalityReport linkedinData={linkedinData} />
          </Box>
        )}
      </Container>
    </>
  );
};

export default Report;
