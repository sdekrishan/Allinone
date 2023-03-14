import React from 'react'
import { useNavigate } from 'react-router-dom';

const TypeCard = ({data,index}) => {
    const navigate = useNavigate();
    const handleClick = ()=>{
    navigate(`/type/${index+1}`);
    }
  return (
    <div className='poke_card' onClick={handleClick}>
        <h3>{data.name}</h3>
    </div>
  )
}

export default TypeCard