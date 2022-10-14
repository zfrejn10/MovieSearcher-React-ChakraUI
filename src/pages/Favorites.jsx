import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import FavList from '../components/FavList'



const Favorites = () => {

    const favorites = useSelector(state => state.reducer.favorites)

    return (
        <Box pb='30px'>
            {favorites.length != 0 
                ? <FavList movies={favorites}/> 
                : <Heading textAlign='center' pt='20px' color='white'>Ничего нет</Heading>
            }
        </Box>   
    )
}

export default Favorites