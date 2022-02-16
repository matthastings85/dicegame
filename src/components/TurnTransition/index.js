import React from "react";

// Components
import Media from "react-media";
import Scorecard from "../Scorecard";
import Button from "../Button";

const TurnTransition = ({ callback, player }) => {
  const handleClick = () => {
    callback(false);
  };
  return (
    <div>
      <Media query="(max-width: 1000px)" render={() => <Scorecard />} />
      <h3>Next Player: {player}</h3>
      <Button text="Start Round" callback={handleClick} id="next-btn" />
    </div>
  );
};

export default TurnTransition;
