import React from 'react'
import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieName: '',
        movies: {
            results: []
        },
        favorites: []
    },
    reducers: {
        addMovieName(state, action) {
            state.movieName = action.payload
        },
        searchMovies(state, action) {
            state.movies = action.payload
        },
        addFavorite(state, action) {
            state.favorites.unshift(action.payload)
        },
        removeFavorite(state, action) {
            state.favorites = state.favorites.filter(item => 
                item.id != action.payload
            ) 
        },
        removeAllFavorites(state) {
            state.favorites = []
            localStorage.removeItem('favorites')
        },
        getFavInLocalStorage(state) {
            localStorage.getItem('favorites')
                ? state.favorites = JSON.parse(localStorage.getItem('favorites'))
                : localStorage.setItem('favorites', [])
        }
    }
})

export default movieSlice.reducer
export const {addMovieName, searchMovies, addFavorite, removeFavorite, removeAllFavorites, getFavInLocalStorage} = movieSlice.actions              