// Displays current and high score, also gives instructions to the player
export function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <h4>High Score: {highScore}</h4>
      <h4>Current Score: {score}</h4>

      <h5>How to play?</h5>
      <p>
        20 Pokemon cards are displayed from the generation you selected. The
        goal is to click each card exactly once. If you click a card for a
        second time the game is over. Each time you click on a card the display
        order is randomized. <b>Good Luck!</b>
      </p>
    </div>
  );
}
