// Creates game over
export function GameOver({ score, playAgain }) {
  return (
    <div className="gameOver">
      <h2>Game Over!</h2>
      <h4>Your score was {score}</h4>
      <h4>Thats Pretty Impressive!</h4>
      <button type="button" onClick={() => playAgain()}>
        Play Again?
      </button>
    </div>
  );
}
