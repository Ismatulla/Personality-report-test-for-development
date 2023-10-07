import SingleCharacterCard from "./singleCharacterCard";
import TeamRoles from "./TeamRoles";

import { Grid } from "@mui/material";

const CharacterCards = () => {
  return (
    <Grid container spacing={5} sx={{ marginBottom: "2.4rem" }}>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Behaviour" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Energizers" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Drainers" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Strength" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Blind spots" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Make a great first impression" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Building trust" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Product demo" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Negotiating" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Pricing" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="How to drive him/her to take action" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Following up" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="Quick meeting tips" />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <SingleCharacterCard charTitle="How to write emails to him/her" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TeamRoles
          charTitle="Team Roles - How he/she works"
          borderColor="#00ac4e"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TeamRoles charTitle="" borderColor="#ed1c24" />
      </Grid>
    </Grid>
  );
};

export default CharacterCards;
