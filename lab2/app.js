import PokemonSearch from "./src/components/pokemonSearch";
import PokemonList from "./src/components/pokemonList";
import SinglePokemonData from "./src/components/pokemonDetails";
import React, { useState, useEffect } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      setPokemonData(data.results);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <PokemonSearch />
      <PokemonList data={pokemonData} />
      <SinglePokemonData />
    </>
  );
}

export default App;
