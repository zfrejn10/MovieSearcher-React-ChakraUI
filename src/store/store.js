import React from 'react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import movieSlice from './movieSlice'

const rootReducer = combineReducers({
    reducer: movieSlice
})


export const store = configureStore({
    reducer: rootReducer
})
