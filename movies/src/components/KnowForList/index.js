import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const KnownForList = ({ knownFor }) => {
  if (!knownFor || knownFor.length === 0) {
    return null;
  }

  return (
    <div>
      <Typography variant="h6" component={"h4"} gutterBottom>
        Known for :
      </Typography>
      
    </div>
  )
}

export default KnownForList;