import React from 'react'
import { searchMovies } from '../store/movieSlice'

export const fetchMovie = (movie) => {
    const movieName = (movie.split(' ')).join('+')
    return async dispatch => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8fdc78e8facb226f71c0cf372d3e3164&language=ru&query=${movieName}`)
        .then(movie => movie.json())
        .then(movie => dispatch(searchMovies(movie)))
    } 
}