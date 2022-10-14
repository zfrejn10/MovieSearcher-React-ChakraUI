import {Button, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavInLocalStorage, removeAllFavorites } from '../store/movieSlice'
import FavItem from './FavItem'


const FavList = ({movies}) => {

    const dispatch = useDispatch()
    const fav = useSelector(state => state.reducer.favorites)

    useEffect(() => {
        dispatch(getFavInLocalStorage())
    }, [])

    useMemo(() => {
        localStorage.setItem('favorites', JSON.stringify(fav))
        // if (fav.length == 1) {
        //     localStorage.removeItem('favorites')
        // }
    }, [fav])

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
        <Button 
            mb='25px' 
            backgroundColor='gray.400'
            onClick={() => dispatch(removeAllFavorites())}
        >
            Очистить
        </Button>
            { movies.map(item => <FavItem movie={item} key={item.id}/>)}
        </Flex>
    )
}

export default FavList