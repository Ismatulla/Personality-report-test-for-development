import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import pasteBtn from "../../assets/paste-btn.svg";
import arrow from "../../assets/arrow-1.svg";
import instance from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
// redux slices
import {
  waitingOpenAction,
  successOpenAction,
} from "../../reducers/reportModalSlice";

import "./home.css";
import { clearAccessToken, clearRefreshToken } from "../../utils/localStorage";

const Home = () => {
  const navigate = useNavigate();

  const data = useSelector((state) => state);
  const dispatch = useDispatch((state) => state);
  const [url, setUrl] = useState("");

  const [isError, setIsError] = useState(false);
  const verifyUrl = url.length !== 0 ? false : true;
  const handleUrl = (e) => {
    const { value } = e.target;
    setUrl(value);
  };

  const notifyError = (errorMessage) =>
    toast.error(`${errorMessage}`, {
      theme: "colored",
      style: {
        fontSize: "1.5rem",
      },
    });
  const notifyLimit = () => {
    let messageWithImage = `<div style="display:flex; align-items:center; justify-content:space-between">
      <p style='text-align:left'>your limit is finished  if you want more, call Thierno Balde <b>(06177103)</b></p> 
       <img src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png" alt="Logo" style="width: 24px; height:24px" />
    </div> `;

    toast.error(
      <div
        dangerouslySetInnerHTML={{
          __html: messageWithImage,
        }}
      />,
      {
        style: {
          fontSize: "1.5rem",
        },
      }
    );
  };
  const handleLinkedInUrlPost = async () => {
    try {
      setIsError(false);
      dispatch(waitingOpenAction(true));
      dispatch(successOpenAction(false));
      if (data !== null) {
        const response = await instance.post("/users/linkedin-url", {
          link: url,
        });

        if (response.status === 200 && url.length !== 0) {
          dispatch(waitingOpenAction(false));
          dispatch(successOpenAction(true));
          if (response.data.chartype && !data.reportModal.isSuccesOpen) {
            console.log(response);
            navigate(
              `/reports?id=${response.data.id}&chartype=${response.data.chartype}`
            );
          }
        }
      }
    } catch (error) {
      dispatch(waitingOpenAction(false));
      dispatch(successOpenAction(false));

      if (error.response.status === 400) {
        if (!url.includes("www.linkedin.com")) {
          console.log("working");
          setTimeout(() => {
            notifyError(
              "There is a problem with url that you entered ,please check it and try again !"
            );
          }, 500);
          return;
        } else if (error.response.data.detail) {
          setTimeout(() => {
            notifyLimit();
          });
          return;
        }
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

  return (
    <Box
      sx={{
        maxWidth: { xl: "1272px" },
        padding: { xs: "0 2rem", xl: "0" },
        margin: { xs: "7.6rem auto 6rem auto", md: "18rem auto 8rem auto" },
        textAlign: { xs: "start", md: "center" },
      }}>
      <Typography
        variant="h6"
        className="font_weight_700 fontPrompt"
        sx={{
          color: "#000000",
          fontSize: { xs: "32px", md: "57px" },
          marginBottom: "8rem",
        }}>
        Get a{" "}
        <span style={{ color: "#00ac4e" }}>
          Comprehensive Personality Report
        </span>
      </Typography>
      <Box
        width="100%"
        sx={{
          backgroundColor: "#f2f2f2",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          marginBottom: "4rem",
        }}>
        <input
          style={{
            color: "#a0a0a0 ",
            width: "100%",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            padding: "28px 32px",
            backgroundColor: "#f2f2f2",
          }}
          type="text"
          className="fontRoboto font_weight_400 home_input "
          placeholder="Enter the LinkedIn Profile Url"
          value={url}
          onChange={handleUrl}
        />
        <Button sx={{ width: "24px", height: "26.18px" }}>
          <img src={pasteBtn} alt="pasteBtn" />
        </Button>
      </Box>
      <Button
        disabled={verifyUrl}
        variant="contained"
        onClick={handleLinkedInUrlPost}
        sx={{
          textTransform: "none",
          margin: "0 auto",
          padding: "2.2rem 2.4rem ",
          fontSize: "1.5rem",
          borderRadius: "8px",
          backgroundColor: "#1a73e8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.55rem",
          maxWidth: { xs: "100%", md: "380px" },
          lineHeight: "2.4rem",
        }}
        fullWidth
        className="fontPrompt font_weight_400 font_size_16">
        <Typography
          variant="p"
          className="fontPrompt font_weight_700 font_size_16 white_text"
          sx={{ display: "flex", gap: "1rem" }}>
          Generate Personality Report
          <span>
            <img src={arrow} alt="arrow" width="100%" height="100%" />
          </span>
        </Typography>
      </Button>
      <ToastContainer />
    </Box>
  );
};

export default Home;
