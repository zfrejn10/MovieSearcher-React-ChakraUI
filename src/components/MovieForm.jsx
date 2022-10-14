import React from 'react'
import { Button, Flex, Input } from '@chakra-ui/react';
import { addMovieName } from '../store/movieSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchMovie } from '../service/fetchMovie';

const MovieForm = () => {

    const dispatch = useDispatch()
    const movieName = useSelector(state => state.reducer.movieName)
    
    return (
        <Flex w='60%' mx='auto' justify='space-between' pt='10px'>
          <Input 
            onChange={e => dispatch(addMovieName(e.target.value))}
            value={movieName}
            variant='filled' 
            placeholder='Введите название фильма' 
            w='85%' 
            color='white'
            boxShadow='2px 5px 25px -3px rgba(180, 180, 180, 0.25)'
            />
          <Button onClick={() => dispatch(fetchMovie(movieName))}>
            Найти
          </Button>
        </Flex>
    )
}

export default MovieForm