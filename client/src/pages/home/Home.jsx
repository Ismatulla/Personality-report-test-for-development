import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import pasteBtn from "../../assets/paste-btn.svg";
import arrow from "../../assets/arrow-1.svg";
import instance from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEmail } from "../../utils/localStorage";

// redux slices
import {
  waitingOpenAction,
  successOpenAction,
} from "../../reducers/reportModalSlice";

import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const data = useSelector((state) => state);
  const dispatch = useDispatch((state) => state);
  const [url, setUrl] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const verifyUrl = url.length !== 0 ? false : true;
  const handleUrl = (e) => {
    const { value } = e.target;
    setUrl(value);
  };

  const handleLinkedInUrlPost = async () => {
    const userEmail = getEmail();
    console.log(userEmail);
    console.log(url);
    try {
      setIsLoading(true);
      dispatch(waitingOpenAction(true));
      dispatch(successOpenAction(false));
      if (data !== null) {
        const response = await instance.post("/users/linkedin-url", {
          link: url,
          email: userEmail,
        });
        console.log("doesnt matter im working");
        console.log(response);
        setIsLoading(false);

        if (response.status === 200 && url.length !== 0) {
          dispatch(waitingOpenAction(false));
          dispatch(successOpenAction(true));
          if (response.data.chartype && !data.reportModal.isSuccesOpen) {
            navigate(
              `/reports?email=${userEmail}&url=${url}&chartype=${response.data.chartype}`
            );
          }
        }
      }
    } catch (error) {
      console.log(data.reportModal.isClicked);
      console.log(error);
      setIsLoading(false);
      dispatch(waitingOpenAction(false));
      dispatch(successOpenAction(false));
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
    </Box>
  );
};

export default Home;
