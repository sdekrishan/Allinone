import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SinglePokemon from './SinglePokemon';

const SinglePage = () => {
    const location = useLocation();
    const [pokemon,setPokemon] = useState({});

    useEffect(()=>{
        const getPokemon = async()=>{
          let response = await fetch(`https://pokeapi.co/api/v2${location.pathname}`)
          response =await response.json();
         return response
      }
     getPokemon().then(res=>setPokemon(res))
    },[location.pathname])

    console.log(pokemon);

  

  return (
    <div>
        { pokemon.sprites && <SinglePokemon pokemon={pokemon}/>}
    </div>
  )
}

export default SinglePage