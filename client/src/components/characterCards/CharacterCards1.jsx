import SingleCharacterCard1 from "./SingleCharacterCard1";
import TeamRoles from "./TeamRoles";
import "./characterCard.css";
import { useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";
import SpectrumCard from "./SpectrumCard";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CharacterProgressbar from "../characterProgressBar/CharacterProgressbar";

const CharacterCards = () => {
  const { singleProfData } = useSelector((state) => state.data);

  const [visibilityIndex, setVisibilityIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleNextClick = () => {
    if (visibilityIndex <= 8) {
      setVisibilityIndex((prevVisibility) => prevVisibility + 1);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const handlePrevClick = () => {
    if (visibilityIndex >= 1) {
      setVisibilityIndex((prevVisibility) => prevVisibility - 1);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div
      style={{
        marginBottom: "2.4rem",
        position: "relative",
        minHeight: "60rem",
        display: "flex",
      }}>
      {/* progressbar */}
      <div>{/* <CharacterProgressbar /> */}</div>
      {/* end of progressbar */}

      <div>
        {/* 1st card */}
        <div className={`item ${visibilityIndex === 0 ? "visible" : "hidden"}`}>
          {" "}
          <SpectrumCard />
        </div>

        {/* 2nd */}
        <Grid
          container
          spacing={5}
          className={`item ${visibilityIndex === 1 ? "visible" : "hidden"}`}>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Conduct"
              description={singleProfData["chars_data"]?.[2]["Conduct"]}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Vitalizers"
              description={singleProfData["chars_data"]?.[3]["Vitalizers"]}
            />
          </Grid>
        </Grid>

        {/* 3RD */}
        <Grid
          container
          spacing={5}
          className={`item ${visibilityIndex === 2 ? "visible" : "hidden"}`}>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Exhausters"
              description={singleProfData["chars_data"]?.[4]["Exhausters"]}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Proficiencies"
              description={singleProfData["chars_data"]?.[5]["Proficiencies"]}
            />
          </Grid>
        </Grid>

        {/* 4RD */}
        <Grid
          container
          spacing={5}
          className={`item ${visibilityIndex === 3 ? "visible" : "hidden"}`}>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Hidden Weaknesses"
              description={
                singleProfData["chars_data"]?.[6]["Hidden Weaknesses"]
              }
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Create a Memorable First Impression"
              description={
                singleProfData["chars_data"]?.[7][
                  "Create a Memorable First Impression"
                ]
              }
            />
          </Grid>
        </Grid>

        {/* 5TH */}
        <Grid
          container
          spacing={5}
          className={`item ${visibilityIndex === 4 ? "visible" : "hidden"}`}>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Trust and Reliability"
              description={
                singleProfData["chars_data"]?.[8]["Trust and Reliability"]
              }
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Product Showcase"
              description={
                singleProfData["chars_data"]?.[9]["Product Showcase"]
              }
            />
          </Grid>
        </Grid>

        {/* 6TH */}
        <Grid
          container
          spacing={5}
          className={`item ${visibilityIndex === 5 ? "visible" : "hidden"}`}>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Negotiation"
              description={singleProfData["chars_data"]?.[10]["Negotiation"]}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Costing"
              description={singleProfData["chars_data"]?.[11]["Costing"]}
            />
          </Grid>
        </Grid>

        {/* 7TH */}
        <Grid
          container
          spacing={5}
          className={`item ${visibilityIndex === 6 ? "visible" : "hidden"}`}>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="How to Prompt Action"
              description={
                singleProfData["chars_data"]?.[12]["How to Prompt Action"]
              }
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="Pursuing"
              description={singleProfData["chars_data"]?.[13]["Pursuing"]}
            />
          </Grid>
        </Grid>

        {/* 8TH */}

        <Grid
          container
          spacing={5}
          className={`item ${visibilityIndex === 7 ? "visible" : "hidden"}`}>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            <TeamRoles
              description={
                singleProfData["chars_data"]?.[14]["Meeting Insights"]
              }
              charTitle="Meeting Insights"
              borderColor="#00ac4e"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            <TeamRoles
              description={
                singleProfData["chars_data"]?.[15]["Meeting Insights_red"]
              }
              charTitle=""
              borderColor="#ed1c24"
            />
          </Grid>
        </Grid>
        {/* 9TH */}
        <Grid
          container
          spacing={5}
          className={`item ${visibilityIndex === 8 ? "visible" : "hidden"}`}>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            {" "}
            <SingleCharacterCard1
              charTitle="How to compose Emails to Them"
              description={
                singleProfData["chars_data"]?.[16][
                  "How to compose Emails to Them"
                ]
              }
            />
          </Grid>
        </Grid>
        {/* 10TH */}
        <Grid
          container
          spacing={5}
          className={`item ${visibilityIndex === 9 ? "visible" : "hidden"}`}>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            <TeamRoles
              description={
                singleProfData["chars_data"]?.[17]["Team Roles-Working Style"]
              }
              charTitle="Team Roles-Working Style"
              borderColor="#00ac4e"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ maxHeight: "100%" }}>
            <TeamRoles
              description={singleProfData["chars_data"]?.[18][""]}
              charTitle=""
              borderColor="#ed1c24"
            />
          </Grid>
        </Grid>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <Button
            variant="outlined"
            onClick={handlePrevClick}
            className="btn_anim_cards">
            <ArrowBackIcon />
          </Button>
          <Button
            variant="outlined"
            onClick={handleNextClick}
            className="btn_anim_cards">
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCards;
