import { Box, Typography } from "@mui/material";

const TeamRoles = ({ charTitle, borderColor, description }) => {
  return (
    <Box >
      <Typography
        variant="h1"
        component="h1"
        className="fontPrompt font_weight_600 font_size_20"
        sx={{
          color: "#00ac4e",
          textAlign: "left",
          marginBottom: {
            xs: "4rem",
          },
        }}>
        {charTitle}
      </Typography>
      <Box
        sx={{
          border: "1px solid  #e0e0e0",
          borderRadius: "8px ",
          minHeight: "100%",
          borderTop: `8px solid ${borderColor}`,
        }}>
        {description?.map((describe, id) => (
          <Typography
            key={id}
            className="fontRoboto font_weight_400 font_size_20 singleCard_datas"
            sx={{
              padding: "1.1rem",
              borderBottom: "1px solid  #e0e0e0",
            }}>
            {describe}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default TeamRoles;
