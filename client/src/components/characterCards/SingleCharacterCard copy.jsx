import { Box, Typography } from "@mui/material";

const SingleCharacterCard = ({ charTitle,description }) => {
  return (
    <Box sx={{ marginTop: { xs: "6rem", md: "8rem" } }}>
      <Typography
        variant="h1"
        component="h1"
        className="fontPrompt font_weight_600 font_size_20"
        sx={{ color: "#00ac4e", textAlign: "left", marginBottom: "4rem" }}>
        {charTitle}
      </Typography>
      <Box
        sx={{
          border: "1px solid  #e0e0e0",
          borderRadius: "8px",
          minHeight: "100%",
        }}>
        <Typography
          className="fontRoboto font_weight_400 font_size_20"
          sx={{
            padding: "2.9rem 2rem 2.9rem 2rem",
            borderBottom: "1px solid  #e0e0e0",
          }}>
          Lorem ipsum dolor sit amet neque praesent sapien vestibulum.
        </Typography>
        <Typography
          className="fontRoboto font_weight_400 font_size_20"
          sx={{
            padding: "2.9rem 2rem 2.9rem 2rem",
            borderBottom: "1px solid  #e0e0e0",
          }}>
          Lorem ipsum dolor sit amet neque praesent sapien vestibulum.
        </Typography>
        <Typography
          className="fontRoboto font_weight_400 font_size_20"
          sx={{
            padding: "2.9rem 2rem 2.9rem 2rem",
            borderBottom: "1px solid  #e0e0e0",
          }}>
          Lorem ipsum dolor sit amet neque praesent sapien vestibulum.
        </Typography>
        <Typography
          className="fontRoboto font_weight_400 font_size_20"
          sx={{
            padding: "2.9rem 2rem 2.9rem 2rem",
            borderBottom: "1px solid  #e0e0e0",
          }}>
          Lorem ipsum dolor sit amet neque praesent sapien vestibulum.
        </Typography>
        <Typography
          className="fontRoboto font_weight_400 font_size_20"
          sx={{
            padding: "2.9rem 2rem 2.9rem 2rem",
          }}>
          Lorem ipsum dolor sit amet neque praesent sapien vestibulum.
        </Typography>
      </Box>
    </Box>
  );
};

export default SingleCharacterCard;
