import {
  Container,
  Box,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components
import Contacts from "../../components/contancts/Contacts";
import PersonalityReport from "../../components/personality-report/PersonalityReport";
import "./report.css";
import NotFound from "../../components/notfound/NotFound";
import CharacterCards1 from "../../components/characterCards/CharacterCards1";
// image
import leftArrow from "../../assets/arrow-to-left.svg";
// global state
import { useDispatch } from "react-redux";

// utils
import {
  getAllProfData,
  getSingleProfData,
} from "../../reducers/profileDataSlice";
import instance from "../../utils/api";
import { clearAccessToken, clearRefreshToken } from "../../utils/localStorage";
//
// react tostify
import { ToastContainer, toast } from "react-toastify";
//
const Report = () => {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const dispatch = useDispatch();

  const [isReportPageLoading, setIsReportPageLoading] = useState(false);
  const [toggleClass, setToggleClass] = useState(true);
  const [contact, setContact] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleClass = () => {
    setToggleClass(!toggleClass);
    setContact(true);
  };

  const handleContact = (value) => {
    setContact(value);
    setToggleClass(true);
  };

  // error notification
  const notifyError = (errorMessage) =>
    toast.error(`${errorMessage}`, {
      theme: "colored",
      style: {
        fontSize: "1.5rem",
      },
    });
  //

  const getAllContacts = async () => {
    try {
      const response = await instance.get("/users/linkedin-url");
      if (response.status === 200) {
        dispatch(getAllProfData(response.data));
      }
    } catch (error) {
      if (error.response.status === 401) {
        clearRefreshToken();
        clearAccessToken();

        setTimeout(() => {
          notifyError("Your session is expired ,please login again !");
        }, 500);

        navigate("/");
      }
    }
  };
  const getSingleReport = async () => {
    try {
      setIsReportPageLoading(true);
      const response = await instance.get(`/chartype/data-sender?id=${id}`);
      if (response.status == 200) {
        dispatch(getSingleProfData(response.data));
      }
      setIsReportPageLoading(false);
      setError(false);
    } catch (error) {
      setIsReportPageLoading(false);
      if (error.response.status === 400) {
        setError(true);
      }
      if (error.response.status === 401) {
        clearRefreshToken();
        clearAccessToken();

        setTimeout(() => {
          notifyError("Your session is expired ,please login again !");
        }, 500);

        navigate("/");
      }
    }
  };
  useEffect(() => {
    getAllContacts();
  }, []);

  useEffect(() => {
    getSingleReport();
  }, [id]);

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
          <Contacts handleContact={handleContact} />
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
            sx={{
              border: {
                xs: 0,
                md: "1px solid #e0e0e0",
                borderRadius: "6px",
              },
              marginTop: { md: "4rem" },
            }}
            className={` ${toggleClass ? "active" : "not-active"}`}>
            {error ? (
              <NotFound errorInfo="The profilethat you are looking for is not found " />
            ) : (
              <>
                {" "}
                <PersonalityReport />
                <div className="personReport">
                  <CharacterCards1 />
                </div>
              </>
            )}
          </Box>
        )}
        <ToastContainer />
      </Container>
    </>
  );
};

export default Report;
