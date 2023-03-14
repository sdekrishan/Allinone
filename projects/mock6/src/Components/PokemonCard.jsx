import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './styles/pokecard.css'

const PokemonCard = ({data}) => {
const navigate = useNavigate();
    const handleClick = ()=>{
    navigate(`/pokemon/${data.name}`);
    }
  return (
    <div className='poke_card' onClick={handleClick}>
        <h3>{data.name}</h3>
    </div>
  )
}

export default PokemonCard