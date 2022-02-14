import React from "react";

// Components
import Scorecard from "./Scorecard";
import Turn from "./Turn";
import Instructions from "./Instructions";

const Game = () => {
  return (
    <div className="game-wrapper">
      <Instructions />
      <Turn />
      <Scorecard />
    </div>
  );
};

export default Game;
