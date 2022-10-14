import React, { useEffect } from 'react'
import { Button, Flex, Box } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFavInLocalStorage } from '../store/movieSlice';

const ButtonCont = () => {

    const dispatch = useDispatch()
    const fav = useSelector(state => state.reducer.favorites)

    useEffect(() => {
        dispatch(getFavInLocalStorage())
    }, [])

    return (
        <Box w='1200px' h='fit-content' mx='auto' bg='rgb(51, 49, 53)' borderRadius='30px' mb='30px'>
            <Flex w='30%' 
                mx='auto' 
                justify='space-around' 
                mt='30px' 
                py='20px'
            >
                <Button colorScheme='yellow' variant='outline' boxShadow='2px 5px 25px -3px rgba(123, 143, 21, 0.25)'>
                    <Link to='/favorites'>Избранное</Link>
                </Button>
                <Button colorScheme='blue' variant='outline' boxShadow='2px 5px 25px -3px rgba(15, 32, 184, 0.25)'>
                    <Link to='/search'>Поиск фильма</Link>
                </Button>
            </Flex>
            <Outlet/>
        </Box>
    )
}

export default ButtonCont