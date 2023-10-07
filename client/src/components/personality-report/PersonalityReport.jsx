import { Box, Typography, Container } from "@mui/material";
import personProfile from "../../assets/person-profile.svg";
import DiscCircle from "../discCircle/DiscCircle";
import "./personalityReport.css";
import arrowDown from "../../assets/arrow-down.svg";
import PersonalityTraits from "../personality-traits/PersonalityTraits";
import { useEffect, useState, useRef } from "react";

const PersonalityReport = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollY = container.scrollTop;
        if (scrollY > 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      className="personReport scrollable-container"
      ref={containerRef}
      sx={{
        border: {
          xs: 0,
          md: "1px solid #e0e0e0",
          maxWidth: { xs: "100%", lg: "996px" },
        },
        marginTop: { md: "4rem" },
      }}>
      {/* profile */}
      <Box
        sx={{
          padding: "3.2rem",
          backgroundColor: "#f2f2f2",
          display: "flex",
          gap: { md: "7.5rem" },
          alignItems: "center",
          borderRadius: { xs: 0, md: "6px 6px 0 0" },
        }}>
        <div>
          <Typography
            variant="h6"
            className="fontPrompt font_weight_700 font_size_16"
            sx={{
              display: { xs: "none", md: "block" },
              color: "#1a73e8",
              marginBottom: "1rem",
            }}>
            Personality report{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: { md: "2.4rem" },
              marginBottom: "2.4rem",
            }}
            className="personality_name">
            <Typography
              variant="h2"
              sx={{ display: { md: "none" }, width: "60px", height: "60px" }}>
              <img
                src={personProfile}
                alt="personprofile"
                style={{ borderRadius: "8px" }}
                width="100%"
              />
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "1.2rem" },
              }}>
              <Typography
                sx={{
                  fontSize: { xs: "2rem", md: "3.2rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
                variant="h2"
                className="font_weight_400 fontPrompt">
                Patric Ryan
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  width: "126px",
                  height: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F2BA4D",
                  borderRadius: "31px",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                }}
                className="fontRoboto font_weight_700">
                Influencer (id)
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h3"
            className="fontPrompt font_weight_400 font_size_20"
            sx={{ color: "#797979" }}>
            He/she is likely to be more optimistic and casual in communication,
            while making decisions quicker than most by relying on intuition.
          </Typography>
        </div>
        <div className="personalityReport_profile">
          <Box sx={{ width: "152px", height: "152px" }}>
            <img
              src={personProfile}
              alt="person profile"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Box>
        </div>
      </Box>
      {/* end of profile */}
      {/* start of diagram and charts */}
      <Typography className="personReportChild" variant="h4">
        <Box sx={{ width: { xs: "100%", md: "384px !important" } }}>
          <DiscCircle />
        </Box>
        <Box>
          <Box
            className="fontPrompt font_weight_400 font_size_48"
            sx={{ color: "black", marginBottom: "4rem" }}>
            Influencer (Id)
          </Box>
          <Box className="fontRoboto font_weight_400 font_size_20">
            Lorem ipsum dolor sit amet ac faucibus senectus platea fusce turpis
            vitae sodales erat id. Ornare fringilla molestie dapibus facilisis
            aenean eget mollis habitasse. Ornare porttitor et pharetra
            suspendisse aenean velit etiam.
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
      <Typography
        variant="h6"
        className="fontRoboto font_weight_400 font_size_16 scrollBottom "
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "51px",
          gap: "1rem",
          color: "#797979",
          display: { xs: "none", md: `${isVisible ? "flex" : "none"}` },
          mb: "5.1rem",
        }}>
        {" "}
        Scroll down to read more <img src={arrowDown} alt="arrowdown" />{" "}
      </Typography>
      {/* end of diagram and charts */}

      {/* start of personality traits */}
      <PersonalityTraits />
      {/* end of personality traits */}
    </Container>
  );
};

export default PersonalityReport;
