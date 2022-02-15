import React from "react";
import Media from "react-media";

// Components
import Scorecard from "./Scorecard";
import Turn from "./Turn";
import Scoring from "./Scoring";

const Game = () => {
  return (
    <div className="game-wrapper">
      <Media query="(min-width: 1000px)" render={() => <Scoring />} />
      <Turn />
      <Media query="(min-width: 1000px)" render={() => <Scorecard />} />
    </div>
  );
};

export default Game;
