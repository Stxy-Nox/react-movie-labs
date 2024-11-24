import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import img from "../../images/film-poster-placeholder.png";

const KnownForList = ({ knownFor }) => {
  if (!knownFor || knownFor.length === 0) {
    return null;
  }

  return (
    <div>
      <Typography variant="h6" component={"h4"} gutterBottom>
        Known for :
      </Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {knownFor.map((movie) => (
          <ImageListItem key={movie.id} >
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : img }
              alt={movie.title}
              
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default KnownForList;