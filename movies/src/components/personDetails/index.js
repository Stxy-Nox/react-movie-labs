import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CakeIcon from '@mui/icons-material/Cake';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const PersonDetails = ({ person }) => {  

    return (
        <>  
        <Typography variant="h5" component="h3">
            Biography
        </Typography>
        
        <Typography variant="h6" component={"p"}>
            {person.biography}
        </Typography>
            
        <Paper component="ul" sx={{...root}}>
            <li>
                <Chip label="AKA" sx={{...chip}} color="secondry" />
            </li>
            {person.also_known_as.map((a) => (
            <li key={a.name}>
                <Chip label={a.name} sx={{...chip}} />
            </li>
            ))}
        </Paper>

        <Paper component={"ul"} sx={{...root}}>
            <Chip icon={<AccountCircleIcon/>} label={person.known_for_department}/>
            <Chip icon={<CakeIcon/>} label={person.birthday}/>

        </Paper>
        
        
        
        
        
        
        
        </>
    )
  
};
export default PersonDetails ;