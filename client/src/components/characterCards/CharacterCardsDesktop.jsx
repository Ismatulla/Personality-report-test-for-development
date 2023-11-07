import SingleCharacterCard from "./SingleCharacterCard";
import TeamRoles from "./TeamRoles";
import "./characterCard.css";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import SpectrumCard from "./SpectrumCard";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CharacterProgressbar from "../characterProgressBar/CharacterProgressbar";

const CharacterCards = () => {
  const { singleProfData } = useSelector((state) => state.data);
  const [visibilityIndex, setVisibilityIndex] = useState(0);

  const handleNextClick = () => {
    if (visibilityIndex <= singleProfData?.chars_data.length - 1) {
      setVisibilityIndex((prevVisibility) => prevVisibility + 1);
    }
  };
  const handlePrevClick = () => {
    if (visibilityIndex >= 1) {
      setVisibilityIndex((prevVisibility) => prevVisibility - 1);
    }
  };

  return (
    <>
      <Grid
        container
        spacing={5}
        style={{
          marginBottom: "2.4rem",
          position: "relative",
          height: "70rem",
        }}>
        {/* progressbar */}
        <Grid item xs={1}>
          <CharacterProgressbar visibilityIndex={visibilityIndex} />
        </Grid>
        {/* end of progressbar */}

        <Grid item xs={11}>
          {/* 1st card */}
          <div
            className={`item ${visibilityIndex === 0 ? "visible" : "hidden"}`}>
            {" "}
            <SpectrumCard />
          </div>

          {/* 2nd */}
          <Grid
            container
            spacing={5}
            className={`item ${visibilityIndex === 1 ? "visible" : "hidden"}`}>
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
                charTitle="Conduct"
                description={singleProfData["chars_data"]?.[2]["Conduct"]}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
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
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
                charTitle="Exhausters"
                description={singleProfData["chars_data"]?.[4]["Exhausters"]}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
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
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
                charTitle="Hidden Weaknesses"
                description={
                  singleProfData["chars_data"]?.[6]["Hidden Weaknesses"]
                }
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
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
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
                charTitle="Trust and Reliability"
                description={
                  singleProfData["chars_data"]?.[8]["Trust and Reliability"]
                }
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
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
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
                charTitle="Negotiation"
                description={singleProfData["chars_data"]?.[10]["Negotiation"]}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
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
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
                charTitle="How to Prompt Action"
                description={
                  singleProfData["chars_data"]?.[12]["How to Prompt Action"]
                }
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
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
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              <TeamRoles
                description={
                  singleProfData["chars_data"]?.[14]["Meeting Insights"]
                }
                charTitle="Meeting Insights"
                borderColor="#00ac4e"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ maxWidth: "440px !important", marginTop: "2rem" }}>
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
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              {" "}
              <SingleCharacterCard
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
            <Grid item xs={12} md={6} sx={{ maxWidth: "440px !important" }}>
              <TeamRoles
                description={
                  singleProfData["chars_data"]?.[17]["Team Roles-Working Style"]
                }
                charTitle="Team Roles-Working Style"
                borderColor="#00ac4e"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ maxWidth: "440px !important", marginTop: "2rem" }}>
              <TeamRoles
                description={singleProfData["chars_data"]?.[18][""]}
                charTitle=""
                borderColor="#ed1c24"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "4rem",
          marginRight: "4rem",
          gap: "1.2rem",
        }}>
        <button
          disabled={visibilityIndex == 0 ? true : false}
          onClick={handlePrevClick}
          className={`btn_anim_cards ${
            visibilityIndex == 0 ? "not-active" : "active"
          }`}>
          <ArrowBackIcon
            className={`anim_icon ${
              visibilityIndex == 0 ? "not-active" : "active"
            }`}
          />
        </button>
        <button
          disabled={visibilityIndex == 9 ? true : false}
          onClick={handleNextClick}
          className={`btn_anim_cards ${
            visibilityIndex == 9 ? "not-active" : "active"
          }`}>
          <ArrowForwardIcon
            className={`anim_icon ${
              visibilityIndex == 9 ? "not-active" : "active"
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default CharacterCards;
