import React from "react";

// Components
import Scorecard from "../Scorecard";
import Button from "../Button";

const TurnTransition = ({ callback, player }) => {
  const handleClick = () => {
    callback(false);
  };
  return (
    <div>
      <Scorecard />
      <h3>Next Player: {player}</h3>
      <Button text="Start Round" callback={handleClick} id="next-btn" />
    </div>
  );
};

export default TurnTransition;
