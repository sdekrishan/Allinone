import React from 'react'
import {Routes,Route} from 'react-router-dom'
import PokemonTypes from '../Components/PokemonTypes'
import SinglePage from '../Components/SinglePage'
import Favourites from './Favourites'
import Home from './Home'
import Pokemon from './Pokemon'
import Types from './Types'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/pokemon' element={<Pokemon/>}></Route>
        <Route path='/types' element={<Types/>}></Route>
        <Route path='/favorites' element={<Favourites/>}></Route>
        <Route path='/pokemon/:name' element={<SinglePage/>}></Route>
        <Route path='/type/:id' element={<PokemonTypes/>}></Route>
    </Routes>
  )
}

export default AllRoutes