import React, { useContext, useState } from "react";

// Context
import { Context } from "../../context";

// Components
import Button from "../Button";

// Utilities
import { farkelCheck } from "../../scoring";

// const scoring = {
//   1: 100,
//   5: 50,
//   "Three 1s": 300,
//   "Three 2s": 200,
//   "Three 3s": 300,
//   "Three 4s": 400,
//   "Three 5s": 500,
//   "Three 6s": 600,
//   "4 of a kind": 1000,
//   "straight 1-6": 1500,
//   "three pairs": 1500,
//   "5 of a kind": 2000,
//   "two triplets": 2500,
//   "6 of a kind": 3000,
// };

const Turn = () => {
  const [players, setPlayers, active, setActive] = useContext(Context);
  const [score, setScore] = useState(0);
  const [activeDice, setActiveDice] = useState(6);
  const [roll, setRoll] = useState([]);
  const [selected, setSelected] = useState([]);
  const [rolling, setRolling] = useState(true);
  const [scoring, setScoring] = useState(false);
  const [farkel, setFarkel] = useState(false);

  const rollDice = () => {
    setRolling(false);
    setScoring(true);
    //generate dice numbers
    if (activeDice > 0) {
      const turn = [];
      for (let i = 1; i <= activeDice; i++) {
        let curRoll = Math.floor(Math.random() * 6 + 1);
        turn.push(curRoll);
      }
      setRoll(turn);
    }
  };

  const scoreRoll = () => {
    // Sort dice rolls for scoring
    const sorted = [[], [], [], [], [], []];
    selected.forEach((dice) => {
      dice == 1
        ? sorted[0].push(dice)
        : dice == 2
        ? sorted[1].push(dice)
        : dice == 3
        ? sorted[2].push(dice)
        : dice == 4
        ? sorted[3].push(dice)
        : dice == 5
        ? sorted[4].push(dice)
        : sorted[5].push(dice);
    });

    // Check for Farkel
    if (farkelCheck(sorted)) {
      setFarkel(true);
      return;
    }

    // Helper function to set score and remove dice that are scoring:
    const setRollScore = (points, removeDice) => {
      setScore(score + points);
      setActiveDice(activeDice - removeDice);
    };

    // reset for next round of scoring
    setSelected([]);
    setRolling(true);
    setScoring(false);
    setRoll([]);
  };

  return (
    <div className="turn">
      {rolling && <Button text="Roll" callback={rollDice} id="roll-button" />}
      <div>
        {roll.map((dice, index) => {
          return (
            <button
              key={index}
              onClick={(event) => {
                setSelected([...selected, event.currentTarget.innerText]);
              }}
            >
              {dice}
            </button>
          );
        })}
      </div>
      {scoring && (
        <Button text="Score Role" callback={scoreRoll} id="score-button" />
      )}
      <h3>Round Score: {score}</h3>
    </div>
  );
};

export default Turn;
