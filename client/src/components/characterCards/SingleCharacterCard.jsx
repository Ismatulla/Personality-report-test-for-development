import { Box, Typography } from "@mui/material";
import "./characterCard.css";

const SingleCharacterCard = ({
  charTitle,
  description,
  borderColor,
  visibilityIndex,
}) => {
  const borderTop =
    borderColor !== "" ? `8px  solid ${borderColor}` : "1px solid #e0e0e0";

  return (
    <Box className={`item ${visibilityIndex >= 1 ? "visible" : "hidden"}`}>
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
          minHeight: "620px",
          borderTop: borderTop,
        }}>
        {description?.map((describe, id) => (
          <Typography
            key={id}
            className="fontRoboto font_weight_400 font_size_20 singleCard_datas"
            sx={{
              padding: "2.9rem 2rem 2.9rem 2rem",
              borderBottom: "1px solid  #e0e0e0",
            }}>
            {describe}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SingleCharacterCard;
