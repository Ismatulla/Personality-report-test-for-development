import SingleCharacterCard from "./SingleCharacterCard";
import TeamRoles from "./TeamRoles";
import "./characterCard.css";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import SpectrumCard from "./SpectrumCard";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CharacterProgressbarMobile from "../characterProgressBar/CharacterProgressBarMobile";

const CharacterCardsMobile = () => {
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
    <div
      style={{
        marginBottom: "2.4rem",
        position: "relative",
      }}>
      <div>
        {/* 1st card */}
        <div
          className={`item ${visibilityIndex === 0 ? "visible" : "hidden"}`}
          style={{ marginBottom: "4rem", minHeight: "100rem" }}>
          {" "}
          <SpectrumCard />
        </div>

        {/* 2nd */}
        <div className={`item ${visibilityIndex === 1 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="Conduct"
            description={singleProfData["chars_data"]?.[2]["Conduct"]}
          />
        </div>
        {/* 3RD */}
        <div className={`item ${visibilityIndex === 2 ? "visible" : "hidden"}`}>
          {" "}
          <SingleCharacterCard
            charTitle="Vitalizers"
            description={singleProfData["chars_data"]?.[3]["Vitalizers"]}
          />
        </div>
        {/* 4RD */}
        <div className={`item ${visibilityIndex === 3 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="Exhausters"
            description={singleProfData["chars_data"]?.[4]["Exhausters"]}
          />
        </div>
        {/* 5TH */}
        <div className={`item ${visibilityIndex === 4 ? "visible" : "hidden"}`}>
          {" "}
          <SingleCharacterCard
            charTitle="Proficiencies"
            description={singleProfData["chars_data"]?.[5]["Proficiencies"]}
          />
        </div>
        {/* 6Th */}
        <div className={`item ${visibilityIndex === 5 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="Hidden Weaknesses"
            description={singleProfData["chars_data"]?.[6]["Hidden Weaknesses"]}
          />
        </div>
        {/* 7Th */}
        <div className={`item ${visibilityIndex === 6 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="Create a Memorable First Impression"
            description={
              singleProfData["chars_data"]?.[7][
                "Create a Memorable First Impression"
              ]
            }
          />
        </div>
        {/* 8TH */}
        <div className={`item ${visibilityIndex === 7 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="Trust and Reliability"
            description={
              singleProfData["chars_data"]?.[8]["Trust and Reliability"]
            }
          />
        </div>
        {/* 9Th */}
        <div className={`item ${visibilityIndex === 8 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="Product Showcase"
            description={singleProfData["chars_data"]?.[9]["Product Showcase"]}
          />
        </div>

        {/* 10TH */}
        <div className={`item ${visibilityIndex === 9 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="Negotiation"
            description={singleProfData["chars_data"]?.[10]["Negotiation"]}
          />
        </div>
        {/* 11th */}
        <div
          className={`item ${visibilityIndex === 10 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="Costing"
            description={singleProfData["chars_data"]?.[11]["Costing"]}
          />
        </div>

        {/* 12TH */}
        <div
          className={`item ${visibilityIndex === 11 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="How to Prompt Action"
            description={
              singleProfData["chars_data"]?.[12]["How to Prompt Action"]
            }
          />
        </div>
        {/* 13th */}
        <div
          className={`item ${visibilityIndex === 12 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="Pursuing"
            description={singleProfData["chars_data"]?.[13]["Pursuing"]}
          />
        </div>
        {/* 14TH */}

        <div
          className={`item ${visibilityIndex === 13 ? "visible" : "hidden"}`}>
          <TeamRoles
            description={singleProfData["chars_data"]?.[14]["Meeting Insights"]}
            charTitle="Meeting Insights"
            borderColor="#00ac4e"
          />
        </div>
        {/* 15th */}
        <div
          className={`item ${visibilityIndex === 14 ? "visible" : "hidden"}`}>
          {" "}
          <TeamRoles
            description={
              singleProfData["chars_data"]?.[15]["Meeting Insights_red"]
            }
            charTitle=""
            borderColor="#ed1c24"
          />
        </div>
        {/* 16TH */}
        <div
          className={`item ${visibilityIndex === 15 ? "visible" : "hidden"}`}>
          <SingleCharacterCard
            charTitle="How to compose Emails to Them"
            description={
              singleProfData["chars_data"]?.[16][
                "How to compose Emails to Them"
              ]
            }
          />
        </div>
        {/* 17TH */}
        <div
          className={`item ${visibilityIndex === 16 ? "visible" : "hidden"}`}>
          <TeamRoles
            description={
              singleProfData["chars_data"]?.[17]["Team Roles-Working Style"]
            }
            charTitle="Team Roles-Working Style"
            borderColor="#00ac4e"
          />
        </div>
        <div
          style={{ marginTop: "2rem" }}
          className={`item ${visibilityIndex === 17 ? "visible" : "hidden"}`}>
          {" "}
          <TeamRoles
            description={singleProfData["chars_data"]?.[18][""]}
            charTitle=""
            borderColor="#ed1c24"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10rem",
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
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
          disabled={visibilityIndex == 17 ? true : false}
          onClick={handleNextClick}
          className={`btn_anim_cards ${
            visibilityIndex == 17 ? "not-active" : "active"
          }`}>
          <ArrowForwardIcon
            className={`anim_icon ${
              visibilityIndex == 17 ? "not-active" : "active"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default CharacterCardsMobile;
