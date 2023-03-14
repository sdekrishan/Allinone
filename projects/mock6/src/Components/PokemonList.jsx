import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/pokecard.css"
const PokemonList = ({pokemon}) => {
    const navigate = useNavigate();
    const handleClick = (el)=>{
    navigate(`/pokemon/${el.pokemon.name}`)
    }
  return (
    <div>
        {pokemon.pokemon.map((el,ind)=>{
            return <h3  className='poke_list' key={ind} onClick={()=>handleClick(el)}>
                {el.pokemon.name}
            </h3>

        })}
    </div>
  )
}

export default PokemonList