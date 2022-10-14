import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import MovieForm from '../components/MovieForm'
import MovieList from '../components/MovieList'
import { useSelector } from 'react-redux'

const MovieSearch = () => {
    const movies = useSelector(state => state.reducer.movies.results)

    return (
        <Box pb='30px'>
            <MovieForm/>
            {movies.length != 0 
                ? <MovieList movies={movies}/> 
                : <Heading textAlign='center' pt='20px' color='white'>Введите запрос</Heading>
            }
        </Box>
    )
}

export default MovieSearch