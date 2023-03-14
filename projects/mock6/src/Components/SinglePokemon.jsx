import React from "react";
import "./styles/singlepokemon.css";

const SinglePokemon = ({ pokemon }) => {
  let arr = JSON.parse(localStorage.getItem("fav")) || [];
  const handleFav = () => {
    arr.push(pokemon);
    localStorage.setItem("fav", JSON.stringify(arr));
    alert('Item has been added to favourites')
  };
  return (
      <div className="main">
        <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
        <button onClick={handleFav}>Favourite</button>
        <h3>Name : {pokemon.name}</h3>
        <h4>Id : {pokemon.id}</h4>
        <p>Base Experience : {pokemon.base_experience}</p>
        <p>Hp : {pokemon.stats[0].base_stat}</p>
        <p>Attack Score : {pokemon.stats[1].base_stat}</p>
        <p>Defense Score : {pokemon.stats[2].base_stat}</p>
        <p>Special Attack Score : {pokemon.stats[3].base_stat}</p>
        <p>Special Defense Score : {pokemon.stats[4].base_stat}</p>
        <p>Speed : {pokemon.stats[5].base_stat}</p>
        <div className="ability">
          Abilities : 
          {pokemon.abilities.map((el, ind) => {
            return <p key={ind}>{el.ability.name}</p>;
          })}
        </div>
        <div className="moves">
          Moves :
          {pokemon.moves.map((el, ind) => {
            return <p key={ind}>{el.move.name}</p>;
          })}
        </div>
        <p>Height : {pokemon.height}</p>
        <p>Weight : {pokemon.weight}</p>
      </div>
  );
};

export default SinglePokemon;
