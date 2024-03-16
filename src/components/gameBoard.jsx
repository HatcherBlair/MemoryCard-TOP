import { useState, useEffect } from "react";
import { PokeCard } from "./pokeCard";
import "../styles/gameBoard.css";

const BASEURL = "https://pokeapi.co/api/v2/";

// GameBoard is responsible for managing the cards on the screen and getting data from pokeAPI
export function GameBoard({ gameOver, increaseScore }) {
  const [pokeList, setPokeList] = useState(null);
  const [clickedList, setClickedList] = useState(new Set());

  // Creates pokeList
  useEffect(() => {
    const generation = "generation/1/";
    const getPokemon = async () => {
      const response = await fetch(`${BASEURL}${generation}`, { mode: "cors" });
      const data = await response.json();

      // a and b intentionally not used
      const shuffledData = data.pokemon_species.sort(
        // eslint-disable-next-line no-unused-vars
        (_a, _b) => 0.5 - Math.random()
      );

      // 20 Pokemon from shuffled list used for the game
      setPokeList(shuffledData.slice(0, 20));
    };

    getPokemon();
  }, []);

  // Matches key(pokemon name) with already clicked cards
  // If !cardClicked -> addToList
  // Else game over
  function onCardClick(key) {
    if (clickedList.has(key)) {
      gameOver();
    } else {
      setClickedList(new Set([...clickedList, key]));
      increaseScore();
    }
  }

  return (
    <div className="gameBoard">
      {pokeList
        ? pokeList.map((pokemon) => (
            <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              BASEURL={BASEURL}
              onClick={onCardClick}
            />
          ))
        : "Loading..."}
    </div>
  );
}
