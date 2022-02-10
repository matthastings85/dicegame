import React from "react";

// Components
import Scorecard from "./Scorecard";
import Turn from "./Turn";

const Game = () => {
  return (
    <div>
      <h1>Let's Begin</h1>
      <Scorecard />
      <Turn />
    </div>
  );
};

export default Game;
