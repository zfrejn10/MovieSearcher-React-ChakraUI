import { Box, Button, Flex, Input } from '@chakra-ui/react';
import React from 'react'
import ButtonCont from './components/ButtonCont';
import MovieSearch from './pages/MovieSearch';
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites';

function App() {
  return (
        <Routes>
          <Route path='/' element={<ButtonCont/>}>
            <Route path='favorites' element={<Favorites/>}/>
            <Route path='search' element={<MovieSearch/>}/> 
          </Route>    
        </Routes> 
  );
}

export default App