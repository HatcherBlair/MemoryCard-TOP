import "../styles/scoreboard.css";

// Displays current and high score, also gives instructions to the player
export function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <h4>High Score: {highScore}</h4>
      <h4>Current Score: {score}</h4>

      <h4>How to play:</h4>
      <ul>
        <li>Pick a generation at the top</li>
        <li>20 Cards are displayed</li>
        <li>
          Click each card <b>ONCE</b>
        </li>
        <li>Order is shuffled after each click</li>
        <li>
          <b>Good Luck!</b>
        </li>
      </ul>
    </div>
  );
}
