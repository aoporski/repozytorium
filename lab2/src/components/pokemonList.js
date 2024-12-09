import React from "react";
import singlePokemonData from "./pokemonDetails";

export default function PokemonList({ data }) {
  if (!data || !Array.isArray(data.results) || data.results.length === 0) {
    return (
      <ul>
        <li>No Pokemon found</li>
      </ul>
    );
  }

  return (
    <ul id="pokemon_list">
      {data.results.map((item, index) => (
        <li key={index}>
          <span onClick={() => singlePokemonData(index + 1)}>
            {index + 1}. {item.name}
          </span>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
              index + 1
            }.png`}
            alt={item.name}
            onClick={() => singlePokemonData(index + 1)}
          />
        </li>
      ))}
    </ul>
  );
}
