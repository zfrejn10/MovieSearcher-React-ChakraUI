import { Box, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { removeFavorite } from '../store/movieSlice'


const FavItem = ({movie}) => {

    const dispatch = useDispatch()

    const back = (movie) => `url('https://image.tmdb.org/t/p/original${movie}')`

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
            <Button colorScheme='red' variant='outline' onClick={() => dispatch(removeFavorite(movie.id))}>
                Удалить
            </Button>
        </Flex>
    )
}

export default FavItem