import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../Component/PrivateRoute'
import Dashboard from './Dashboard'
import Home from './Home'
import Quiz from './Quiz'
import Results from './Results'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz' element={<PrivateRoute><Quiz/></PrivateRoute>}/>
      <Route path='/results' element={<Results/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default AllRoutes