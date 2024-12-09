import React, { useState } from "react";
import singlePokemonData from "./pokemonDetails";

export default function PokemonSearch({ id }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const pokemon = singlePokemonData.find(searchQuery.toLowerCase());
    if (pokemon) {
      console.log("Pokemon found:", pokemon);
    } else {
      console.log("Pokemon not found");
    }
  };

  return (
    <>
      <label htmlFor="pokemon_search">Search for the pokemon:</label>
      <input
        type="search"
        id="pokemon_search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button id="search_button" onClick={handleSearch}>
        Search
      </button>
    </>
  );
}
