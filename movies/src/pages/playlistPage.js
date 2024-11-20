import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import Spinner from '../components/spinner'
import { getMovie } from "../api/tmdb-api";

import RemoveFormPlaylist from "../components/cardIcons/removeFromPlaylist";
