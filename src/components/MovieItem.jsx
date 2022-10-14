import { Box, Flex, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { addFavorite, removeFavorite } from '../store/movieSlice'
import { useSelector, useDispatch } from 'react-redux/es/exports'


const MovieItem = ({movie, ids}) => {

    const fav = useSelector(state => state.reducer.favorites)
    const dispatch = useDispatch()

    const [isFavary, setIsFavary] = useState(ids.includes(movie.id))

    const back = movie => `url('https://image.tmdb.org/t/p/original${movie}')`

    const addFavorites = (favItem) => {
        let noRepeatArray = fav.filter(item => item.id == movie.id)
        if (noRepeatArray.length == 0) {
            dispatch(addFavorite({
                poster_path: favItem.poster_path,
                overview: favItem.overview,
                release_date: favItem.release_date,
                title: favItem.title,
                id: movie.id
            }))  
        }
        setIsFavary(!isFavary)
    }

    const removeFavorites = (favItem) => {
        setIsFavary(!isFavary)
        dispatch(removeFavorite(movie.id))
    }

    return (
        <Flex 
            w='90%' 
            mx='auto' 
            min-height='150px' 
            bgColor='rgb(67, 65, 69)' 
            mb='20px' borderRadius='10px' 
            border='1px solid black'
            p='10px'
            pr='20px'
            align='center'
            justify='space-between'
        >
            <Box
                w='86px' 
                h='129px' 
                backgroundImage={back(movie.poster_path)}
                backgroundSize='cover'
                borderRadius='10px'
            ></Box>
            <Flex 
                w='55%' 
                minH='130px' 
                py='10px' 
                color='white' 
                fontSize='12px'
                direction='column'
                border='1px solid orange'
                borderRadius='5px'
                justify='space-between'
                p='10px'
            >
                <Box fontSize='14px' fontWeight='bold' color='teal'>{movie.title}</Box>
                <Box borderTop='1px solid gray' borderBottom='1px solid gray' h='80px' overflowY='scroll' m='5px 0'>
                    {movie.overview}
                </Box>
                <Box color='green'>
                    Дата выхода: {movie.release_date}
                </Box>
            </Flex>
            {isFavary 
                ? <Button colorScheme='red' variant='outline' w='130px' onClick={() => removeFavorites(movie)}>
                    Удалить
                  </Button>
                : <Button colorScheme='yellow' variant='outline' w='130px' onClick={() => addFavorites(movie)}>
                    В избранное
                  </Button>
            }
            
            
        </Flex>
    )
}

export default MovieItem