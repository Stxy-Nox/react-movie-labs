import React from "react";

import Grid from "@mui/material/Grid2";

const PeopleList = (props) => {
    let peopleCards = props.map((m) => (
        <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
          <People key={m.id} movie={m} action={props.action} />
        </Grid>
      ));  
      return peopleCards;
}

export default PeopleList;