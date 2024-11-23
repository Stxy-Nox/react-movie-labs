import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

function PeopleListPageTemplate({ people, title }) {

    return (
      <Grid container>
        <Grid size={12}>
          <Header title={title} />
        </Grid>
        <Grid container sx={{flex: "1 1 500px"}}>
          <MovieList  people={people}></MovieList>
        </Grid>
      </Grid>
    );
  }
  export default PeopleListPageTemplate;