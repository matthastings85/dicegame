import React from "react";

// Components
import Scorecard from "./Scorecard";
import Turn from "./Turn";

const Game = () => {
  return (
    <div className="game-wrapper">
      <Scorecard />
      <Turn />
    </div>
  );
};

export default Game;
