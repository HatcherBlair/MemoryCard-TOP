/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { PokeCard } from "./pokeCard";
import "../styles/gameBoard.css";

const BASEURL = "https://pokeapi.co/api/v2/";

// GameBoard is responsible for managing the cards on the screen and getting data from pokeAPI
export function GameBoard({ gameOver, increaseScore }) {
  const [pokeList, setPokeList] = useState(null);
  const [clickedList, setClickedList] = useState(new Set());
  const [generation, setGeneration] = useState("generation/1/");

  // Creates pokeList
  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(`${BASEURL}${generation}`, { mode: "cors" });
      const data = await response.json();

      // a and b intentionally not used
      const shuffledData = data.pokemon_species.sort(
        (_a, _b) => 0.5 - Math.random()
      );

      // 20 Pokemon from shuffled list used for the game
      setPokeList(shuffledData.slice(0, 20));
    };

    getPokemon();
  }, [generation]);

  // Matches key(pokemon name) with already clicked cards
  // If !cardClicked -> addToList
  // Else game over
  function onCardClick(key) {
    if (clickedList.has(key)) {
      gameOver();
    } else {
      setClickedList(new Set([...clickedList, key]));
      increaseScore();
      // Shuffle the list
      setPokeList(pokeList.sort((_a, _b) => 0.5 - Math.random()));
    }
  }

  function generationOnChange(e) {
    setGeneration(e.target.value);
  }

  return (
    <div>
      <div className="generation-select">
        <label>Pokemon Generation: </label>
        <select
          name="currGeneration"
          defaultValue="generation/1/"
          onChange={(e) => generationOnChange(e)}
        >
          <option value="generation/1/">Gen 1</option>
          <option value="generation/2/">Gen 2</option>
          <option value="generation/3/">Gen 3</option>
          <option value="generation/4/">Gen 4</option>
          <option value="generation/5/">Gen 5</option>
          <option value="generation/6/">Gen 6</option>
          <option value="generation/7/">Gen 7</option>
          <option value="generation/8/">Gen 8</option>
          <option value="generation/9/">Gen 9</option>
        </select>
      </div>

      <div className="gameBoard">
        {pokeList
          ? pokeList.map((pokemon) => (
              <PokeCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                BASEURL={BASEURL}
                onClick={onCardClick}
              />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
