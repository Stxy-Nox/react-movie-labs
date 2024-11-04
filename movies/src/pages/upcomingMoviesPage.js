import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const UpcomingPage = (props) => {
    const {data,error, isLoading, isError} = useQuery('upcoming',getUpcomingMovies)

    if (isLoading) {
        return  <Spinner/>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favourites',JSON.stringify(favorites))
    const addToFavorites = (movieId) => true    

    return (
        <PageTemplate
          title="Discover Movies"
          movies={movies}
          action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />
          }}
        />
    );
}
export default UpcomingPage;