import {Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import MovieItem from './MovieItem'


const MovieList = ({movies}) => {

    const fav = useSelector(state => state.reducer.favorites)
    const ids = fav.map(item => item.id)
    return (
        <Flex
            w='60%' 
            mx='auto'  
            h='fit-content' 
            mt='30px' bg='gray.600' 
            borderRadius='20px' 
            direction='column' pt='20px' 
            boxShadow='2px 5px 25px -3px rgba(180, 180, 180, 0.25)'
        >
            {movies?.map(item => <MovieItem movie={item} key={item.id} ids={ids}/>)}
        </Flex>
    )
}

export default MovieList