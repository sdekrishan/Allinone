import React, { useEffect, useState } from 'react'
import PokemonCard from '../Components/PokemonCard';
import "./Styles/pokemon.css"
const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(1);
    const [inputChange, setInputChange] = useState("")
  
    useEffect(()=>{
        const getPokemon = async()=>{
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${20*page}`)
            response =await response.json();
            console.log(response.results);
            return setPokemon(response.results)
        }
     getPokemon()
    },[page])

    const handleSearch = ()=>{
        const getSearch = async()=>{
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputChange}`)
            response =await response.json();
            console.log(response);
            return setPokemon([response])
        }
        getSearch()
    
    }
  return (
    <>
    <div>
        <input type="text" placeholder='Enter Pokemon name' onChange={(e)=>setInputChange(e.target.value)} />
        <button onClick={handleSearch}>Submit</button>
    </div>
    <div>
        {pokemon && pokemon.map((item,index)=>{
            return <PokemonCard data={item} key={index} />
        })}
    </div>
    <div className='paginate'>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <span>{page}</span>
        <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
    </>
  )
}

export default Pokemon