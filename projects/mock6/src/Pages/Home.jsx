import React from 'react'
import { Link } from 'react-router-dom'
import "./Styles/Home.css"
const Home = () => {
  return (
    <>
    <nav className='navbar'>
        <Link to='/pokemon'>Pokemon</Link>
        <Link to='/types'>Types</Link>
        <Link to='/favorites'>Favorites</Link>
    </nav>
    <h1>Welcome to Pokemon World</h1>
    </>

  )
}

export default Home