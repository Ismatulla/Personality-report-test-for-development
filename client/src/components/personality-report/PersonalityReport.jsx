import { Box, Typography } from "@mui/material";
import "./personalityReport.css";
import rgbaColor from "../../utils/discColor";

// global state import
import { useSelector } from "react-redux";
//

const PersonalityReport = () => {
  const searchParams = new URLSearchParams(location.search);
  const chartype = searchParams.get("chartype");
  const color = rgbaColor[chartype];

  // global state data

  const { singleProfData } = useSelector((state) => state.data);
  //
  return (
    <div>
      {/* profile */}
      <Box
        sx={{
          padding: "3.2rem",
          backgroundColor: "#f2f2f2",
          display: "flex",
          gap: { md: "7.5rem" },
          alignItems: "center",
          borderRadius: { xs: 0, md: "6px 6px 0 0" },
          marginBottom: "5rem",
          borderBottom: "1px solid #e0e0e0",
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
              sx={{
                display: { md: "none" },
                width: "60px",
                height: "60px",
              }}>
              <img
                src={singleProfData?.data?.prof_pic}
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
                {singleProfData?.data?.first_name}{" "}
                {singleProfData?.data?.last_name}
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
                  backgroundColor: `${color}`,
                  borderRadius: "31px",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                }}
                className="fontRoboto font_weight_700">
                {singleProfData?.data?.chartype}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h3"
            className="fontPrompt font_weight_400 font_size_20"
            sx={{ color: "#797979" }}>
            {singleProfData?.chars_data?.[0][1]}
          </Typography>
        </div>
        <div className="personalityReport_profile">
          <Box sx={{ width: "152px", height: "152px" }}>
            <img
              src={singleProfData?.data?.prof_pic}
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
    </div>
  );
};

export default PersonalityReport;
