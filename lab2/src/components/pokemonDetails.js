import React, { useEffect } from "react";

export default function SinglePokemonData({ id }) {
  useEffect(() => {
    async function fetchPokemonData() {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const info = document.getElementById("pokemon_info");

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        info.innerHTML = `
          <h2>${data.name}</h2>
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
          <p>Types: ${data.types.map((type) => type.type.name).join(", ")}</p>
        `;
      } catch (error) {
        info.innerText = "Unable to get Pokémon data";
        console.error(error.message);
      }
    }

    fetchPokemonData();
  }, [id]);

  return <div id="pokemon_info">Waiting</div>;
}
