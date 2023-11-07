import { useState } from "react";
import SingleCharacterCard from "./SingleCharacterCard";
import SpectrumCard from "./SpectrumCard";

import "./characterCard.css";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const CharacterCards = () => {
  const { singleProfData } = useSelector((state) => state.data);
  const [visibilityIndex, setVisibilityIndex] = useState(0);
  const handleNextClick = () => {
    if (visibilityIndex <= 12) {
      setVisibilityIndex((prevVisibility) => prevVisibility + 1);
    }
  };
  const handlePrevClick = () => {
    if (visibilityIndex >= 0) {
      setVisibilityIndex((prevVisibility) => prevVisibility - 1);
    }
  };

  return (
    <Grid
      container
      spacing={5}
      sx={{
        position: "relative",
        maxHeight: "720px",
      }}>
      <SpectrumCard visibilityIndex={visibilityIndex} />
      {singleProfData &&
        singleProfData["chars_data"]
          ?.slice(visibilityIndex + 2, visibilityIndex + 4)
          ?.map((charData, index) => {
            const charKeys = Object.keys(charData);
            const [charTitle] = charKeys;
            const description = charData[charTitle];

            return (
              <Grid item xs={6} key={index}>
                <SingleCharacterCard
                  visibilityIndex={visibilityIndex}
                  index={index}
                  charTitle={`${charTitle}`}
                  description={description}
                  borderColor={
                    (charTitle === "Team Roles-Working Style"
                      ? "#00ac4e"
                      : "") || (charTitle === "" ? "#ed1c24" : "")
                  }
                />
              </Grid>
            );
          })}
      <button onClick={handlePrevClick}>prev</button>
      <button onClick={handleNextClick}>next</button>
    </Grid>
  );
};

export default CharacterCards;
