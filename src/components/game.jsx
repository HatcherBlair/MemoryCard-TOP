import { useState } from "react";
import { GameBoard } from "./gameBoard";
import { GameOver } from "./gameOver";
import "../styles/game.css";

// Game is responsible for managing the cards on the screen and getting data from pokeAPI
export function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function increaseScore() {
    setScore(score + 1);
  }

  // Game over
  function isOver() {
    if (score > highScore) setHighScore(score);
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
    <div className="gameBoard">
      {gameOver ? (
        <GameOver score={score} playAgain={playAgain} />
      ) : (
        <GameBoard increaseScore={increaseScore} gameOver={isOver} />
      )}
    </div>
  );
}
