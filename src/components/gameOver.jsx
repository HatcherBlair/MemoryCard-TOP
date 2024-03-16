// Creates game over
export function GameOver({ score, playAgain }) {
  function getScoreMessage(score) {
    if (score < 5) {
      return <h4>Thats kind of weak!</h4>;
    } else if (score < 10) {
      return <h4>Thats decent</h4>;
    } else if (score < 19) {
      return <h4>Alright now you$apos;re cooking</h4>;
    } else {
      return <h4>Perfect score! You are a god!!!</h4>;
    }
  }

  return (
    <div className="gameOver">
      <h2>Game Over!</h2>
      <h4>Your score was {score}</h4>
      {getScoreMessage(score)}
      <button type="button" onClick={() => playAgain()}>
        Play Again?
      </button>
    </div>
  );
}
