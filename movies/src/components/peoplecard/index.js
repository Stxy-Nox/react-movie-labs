import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import { cardActionAreaClasses } from "@mui/material";


export default function PeopleCard(people) {
    const konwForMovies = people.known_for.map((movie) => movie.orifinal_title).join(",");
    return (
        <Card>
           <CardHeader>
                role={
                    <Typography variant="h5" component={"p"}>
                        {people.known_for_department}{" "}
                    </Typography>
                }
            </CardHeader> 
            <CardMedia
                sx={{ height: 500 }}
                image={
                  people.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                    : img
                }
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {people.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {konwForMovies}
            </Typography>
            </CardContent>
          
        </Card>

    )


}