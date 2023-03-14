import React from 'react'
import FavouritesCard from '../Components/FavouritesCard';
import "./Styles/favorites.css";

const Favourites = () => {
    let arr = JSON.parse(localStorage.getItem("fav"));

   
  return (
    <div className='fav'>
        {arr ? arr.map((el,ind)=>{
            return <FavouritesCard pokemon={el}/>
        }) : <h1>Please add pokemon</h1>}
    </div>
  )
}

export default Favourites