import React, { useEffect, useState } from 'react'
import PokemonCard from '../Components/PokemonCard';
import TypeCard from '../Components/TypeCard';

const Types = () => {
    const [pokemon, setPokemon] = useState([]);
    
  
    useEffect(()=>{
        const getPokemon = async()=>{
            let response = await fetch(`https://pokeapi.co/api/v2/type/`)
            response =await response.json();
            console.log(response.results);
            return setPokemon(response.results)
        }
     getPokemon()
    },[])

  return (
    <>
    <div>
        {pokemon && pokemon.map((item,index)=>{
            return <TypeCard data={item} key={index} index={index}/>
        })}
    </div>
    </>
  )
}

export default Types