import React from "react";

import { one, two, three, four, five, six } from "../../utilities";

const DiceContainer = (props) => {
  const { diceArr, onClick, classes } = props;
  return (
    <div className="dice-container">
      {diceArr.map((dice, index) => {
        let display;
        dice == 1
          ? (display = one)
          : dice == 2
          ? (display = two)
          : dice == 3
          ? (display = three)
          : dice == 4
          ? (display = four)
          : dice == 5
          ? (display = five)
          : (display = six);
        return (
          <div className={classes} key={index} id={index} onClick={onClick}>
            {display}
          </div>
        );
      })}
    </div>
  );
};

export default DiceContainer;
