import { useState } from "react";
import { GameBoard } from "./gameBoard";
import { GameOver } from "./gameOver";
import { Scoreboard } from "./scoreboard";
import "../styles/game.css";

// Game is responsible for managing the cards on the screen and getting data from pokeAPI
export function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function increaseScore() {
    setScore(score + 1);

    // Player has clicked all cards
    if (score + 1 >= 20) isOver(score + 1);
  }

  // Game over
  function isOver(optScore = null) {
    if (optScore) {
      setHighScore(optScore);
    } else {
      if (score > highScore) setHighScore(score);
    }
    setGameOver(true);
  }

  // Resets game state
  function playAgain() {
    setScore(0);
    setGameOver(false);
  }

  // Gameboard contains scoreboard and array of cards
  // Yuck nested ternaries!
  // If there is a way to do this without nesting ternaries LMK
  return (
    <div className="game-container">
      <Scoreboard score={score} highScore={highScore} />
      {gameOver ? (
        <GameOver score={score} playAgain={playAgain} />
      ) : (
        <GameBoard increaseScore={increaseScore} gameOver={isOver} />
      )}
    </div>
  );
}
