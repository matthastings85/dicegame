import React, { useContext, useState } from "react";

// Context
import { Context } from "../../context";

// Components
import Button from "../Button";

// Utilities
import { farkelCheck, sortDice, getScore } from "../../scoring";

const Turn = () => {
  const [players, setPlayers, _active, _setActive] = useContext(Context);
  // This keeps track of the score for a single turn
  const [score, setScore] = useState(0);
  // This keeps track of how many dice are available to roll
  const [activeDice, setActiveDice] = useState(6);
  // this is an array of each roll
  const [roll, setRoll] = useState([]);
  // this is an array of the dice selected for scoring
  const [selected, setSelected] = useState([]);
  // Rolling is true when the player has the option to roll
  const [rolling, setRolling] = useState(true);
  // Scoring is true when the player has the option to score points after a roll
  const [scoring, setScoring] = useState(false);
  // farkel is true when no points can be scored in a roll. Turn ends without scoring.
  const [farkel, setFarkel] = useState(false);

  // Player information
  const playersCopy = players.slice();
  const playerIndex = playersCopy.findIndex((player) => player.myTurn);
  const activeName = playersCopy[playerIndex].name;
  const startRoundScore = playersCopy[playerIndex].score;

  // receives the number of active dice and generates the roll, sorts, and checks for farkel;
  const rollDice = async () => {
    setRolling(false);
    setScoring(true);
    //generate dice numbers
    const turn = [];
    if (activeDice > 0) {
      for (let i = 1; i <= activeDice; i++) {
        let curRoll = Math.floor(Math.random() * 6 + 1);
        turn.push(curRoll);
      }
    }
    setRoll(turn);

    // Sort dice for Farkel check;
    const sorted = await sortDice(turn);
    // Check for Farkel and set roll
    const farkeled = await farkelCheck(sorted);
    if (farkeled) {
      setFarkel(true);
      setScore(0);
    }
  };

  const scoreRoll = async () => {
    console.log(selected, "selected");
    // Sort selected dice for scoring:
    const sorted = await sortDice(selected);

    const { points, remove } = await getScore(sorted);

    console.log(points, "points", remove, "remove");

    // Set score and remove dice that are scoring:
    setScore(score + points);
    if (activeDice - remove == 0) {
      setActiveDice(6);
    } else {
      setActiveDice(activeDice - remove);
    }

    // reset for next round of scoring
    setSelected([]);
    setRolling(true);
    setScoring(false);
    setRoll([]);
  };

  // add dice to selected arr and remove it from the roll arr
  const selectDice = (event) => {
    setSelected([...selected, event.currentTarget.innerText]);
    const index = event.target.id;
    const updatedRoll = roll.slice();
    updatedRoll.splice(index, 1);
    console.log(updatedRoll);
    setRoll(updatedRoll);
  };

  const finishTurn = () => {
    // Set player score
    playersCopy[playerIndex].score = startRoundScore + score;
    // Change 'myTurn' to next player
    if (playerIndex === playersCopy.length - 1) {
      playersCopy[0].myTurn = true;
      //Set 'myTurn' of current player to 'false'
      playersCopy[playerIndex].myTurn = false;
    } else {
      playersCopy[playerIndex + 1].myTurn = true;
      playersCopy[playerIndex].myTurn = false;
    }
    // Update player Context
    setPlayers(playersCopy);

    // Reset for next player
    setScore(0);
    setActiveDice(6);
    setRoll([]);
    setSelected([]);
    setRolling(true);
    setScoring(false);
    setFarkel(false);
  };

  return (
    <div className="turn">
      <h2>{`It is ${activeName}'s turn`}</h2>
      {rolling && (
        <Button
          text={`Roll ${activeDice} dice`}
          callback={rollDice}
          id="roll-button"
        />
      )}
      <div>
        {roll.map((dice, index) => {
          return (
            <button key={index} id={index} onClick={selectDice}>
              {dice}
            </button>
          );
        })}
      </div>
      <div>
        {selected.map((dice, index) => {
          return (
            <button key={index} onClick={selectDice}>
              {dice}
            </button>
          );
        })}
      </div>
      {scoring && !farkel && (
        <Button text="Score Selected" callback={scoreRoll} id="score-button" />
      )}
      {farkel && <h2>FARKEL!</h2>}
      <h3>Round Score: {farkel ? 0 : score}</h3>
      {farkel || score > 0 ? (
        <Button text="Finish Turn" callback={finishTurn} id="finish-btn" />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Turn;
