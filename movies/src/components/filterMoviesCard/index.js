import React  from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl, { formControlClasses } from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres, getLanguages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const formControl = 
  {
    margin: 1,
    minWidth: "90%",
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterMoviesCard(props) {

  const { data:genresData, error:genresError, isLoading:genresIsLoading, isError:genresIsError } = useQuery("genres", getGenres);
  const { data: languagesData, error: languagesError, isLoading: languagesLoading, isError: languagesIsError } = useQuery("languages", getLanguages);
  

  if (genresIsLoading || languagesLoading) {
    return <Spinner />;
  }

  if (genresIsError ) {
    return <h1>{genresError.message}</h1>;
  }
  if (languagesIsError ) {
    return <h1>{languagesError.message}</h1>;
  }

  const genres = genresData.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });//put all at the fisrt place of  filter options
  }

  const languages = languagesData;
  if (languages[0].iso_639_1 !== "all"){
    languages.unshift({ iso_639_1: "all", english_name: "All", name:"" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleLanguageChange = (e) => {
    handleChange(e, "language", e.target.value);
  };

  const handleRatingChange = (e,newValue) => {
    handleChange(e, "rating", newValue);
  }

  return (
    <Card 
      sx={{
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
            sx={{...formControl}}
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            value={props.titleFilter}
            onChange={handleTextChange}
        />
        <FormControl sx={{...formControl}}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
                labelId="genre-label"
                id="genre-select"
                defaultValue=""
                value={props.genreFilter}
                onChange={handleGenreChange}
            >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{...formControl}}>
          <InputLabel id="language-label">Language</InputLabel>
          <Select
            labelId="language-label"
            id="language-select"
            defaultValue="all"
            value={props.languageFilter}
            onChange={handleLanguageChange}
          >
            {languages.map((language) => {
              return (
                <MenuItem key={language.iso_639_1} value={language.iso_639_1}>
                  {language.english_name}
                </MenuItem>
              );
            })}
                </Select>
        </FormControl>
        <Box sx={{ ...formControl }}>
          <Typography id="rating-slider" gutterBottom>
            Rating Range
          </Typography>
          <Slider
            
            value={props.ratingFilter}
            onChange={handleRatingChange}
            valueLabelDisplay="auto"
            min={0}
            max={10}
            step={0.5}
            marks={[
              { value: 0, label: '0' },
              { value: 10, label: '10' }
            ]}
          />
        </Box>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}