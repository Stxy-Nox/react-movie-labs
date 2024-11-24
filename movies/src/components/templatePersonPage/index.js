import React from "react";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplatePersonPage = ({ person, children}) => {

  const {data , error, isLoading, isError } = useQuery(
    ["presonImages", {id: person.id}],
    getPersonImages
  );

}

export default TemplatePersonPage;