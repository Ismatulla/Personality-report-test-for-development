import SingleCharacterCard from "./SingleCharacterCard";
import TeamRoles from "./TeamRoles";

import { Grid } from "@mui/material";

const CharacterCards = ({ data }) => {
  return (
    <Grid container spacing={5} sx={{ marginBottom: "2.4rem" }}>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Behaviour"
          description={data?.[2]["Behavior"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Energizers"
          description={data?.[3]["Energizers"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Drainers"
          description={data?.[4]["Drainers"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Strength"
          description={data?.[5]["Strengths"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Blind spots"
          description={data?.[6]["Blind spots"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Make a great first impression"
          description={data?.[7]["Make a great first impression with him/her"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Building trust"
          description={data?.[8]["Building trust"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Product demo"
          description={data?.[9]["Product demo"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Negotiating"
          description={data?.[10]["Negotiating"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Pricing"
          description={data?.[11]["Pricing"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="How to drive him/her to take action"
          description={data?.[12]["How to drive him/her to take action"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Following up"
          description={data?.[13]["Following up"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="Quick meeting tips"
          description={data?.[14]["Quick Meeting Tips"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard
          charTitle="How to write emails to him/her"
          description={data?.[15]["Writing style - How to write an email"]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TeamRoles
          description={data?.[16]["Team Roles"]}
          charTitle="Team Roles - How he/she works"
          borderColor="#00ac4e"
        />
      </Grid>
      {/* <Grid item xs={12} md={6}> */}
      {/* <TeamRoles charTitle="" borderColor="#ed1c24" /> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default CharacterCards;
