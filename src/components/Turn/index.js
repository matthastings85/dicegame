import React, { useContext, useState } from "react";

// Context
import { Context } from "../../context";

// Components
import Button from "../Button";
import TurnTransition from "../TurnTransition";

// Utilities
import { farkelCheck, sortDice, getScore } from "../../scoring";
import { one, two, three, four, five, six } from "../../utilities";

const Turn = () => {
  const [players, setPlayers, _active, _setActive, gameOver, setGameOver] =
    useContext(Context);
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
  // Transition screen to show scores and next player
  const [transition, setTransition] = useState(false);

  // Player information
  const playersCopy = players.slice();
  const playerIndex = playersCopy.findIndex((player) => player.myTurn);
  const activeName = playersCopy[playerIndex].name;
  const startRoundScore = playersCopy[playerIndex].score;
  let winner;

  // Check for game over
  if (playersCopy[playerIndex].endGame) {
    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < playersCopy.length; i++) {
      if (playersCopy[i].score > max) {
        max = playersCopy[i].score;
        maxIndex = i;
      }
    }
    winner = playersCopy[maxIndex].name;
    setGameOver(true);
  }

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
    // Sort selected dice for scoring:
    const sorted = await sortDice(selected);

    const { points, remove } = await getScore(sorted);

    // Set score and remove dice that are scoring:
    setScore(score + points);
    if (activeDice - remove === 0) {
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
  const selectDice = async (event) => {
    if (farkel) {
      return;
    }
    const index = event.target.id;
    const updatedRoll = roll.slice();
    const spliced = updatedRoll.splice(index, 1);

    await setSelected([...selected, spliced]);
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
    // Check to see if current player has reached 10,000 points - set endGame to true
    if (playersCopy[playerIndex].score >= 10000) {
      playersCopy[playerIndex].endGame = true;
    }

    // Update player Context
    setPlayers(playersCopy);

    // Reset for next player & move to transition screen
    setScore(0);
    setActiveDice(6);
    setRoll([]);
    setSelected([]);
    setRolling(true);
    setScoring(false);
    setFarkel(false);
    setTransition(true);
  };

  return (
    <div className="turn-container">
      {!gameOver && !transition && (
        <div className="turn">
          <h2>{`Current Player: ${activeName}`}</h2>
          <h3>Round Score: {farkel ? 0 : score}</h3>
          {rolling && (
            <Button
              text={`Roll ${activeDice} dice`}
              callback={rollDice}
              id="roll-button"
            />
          )}
          {roll.length > 0 && <h3>Current Roll</h3>}
          <div className="dice-container">
            {roll.map((dice, index) => {
              let displayRoll;
              dice == 1
                ? (displayRoll = one)
                : dice == 2
                ? (displayRoll = two)
                : dice == 3
                ? (displayRoll = three)
                : dice == 4
                ? (displayRoll = four)
                : dice == 5
                ? (displayRoll = five)
                : (displayRoll = six);
              return (
                <div
                  className="click-div m-5"
                  key={index}
                  id={index}
                  onClick={selectDice}
                >
                  {displayRoll}
                </div>
              );
            })}
          </div>
          {roll.length > 0 && !farkel && <h4>select dice for scoring</h4>}
          {farkel && <h2 className="purple font-large">FARKEL!</h2>}
          {selected.length > 0 && <h3>Selected for scoring</h3>}
          <div className="dice-container">
            {selected.map((dice, index) => {
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
                <div className="m-5" key={index}>
                  {display}
                </div>
              );
            })}
          </div>
          {scoring && !farkel && selected.length > 0 && (
            <Button
              text="Score Selected"
              callback={scoreRoll}
              id="score-button"
            />
          )}
          {farkel ||
          (!scoring && score > 0 && startRoundScore >= 500) ||
          (!scoring && score >= 500) ? (
            <Button text="Finish Turn" callback={finishTurn} id="finish-btn" />
          ) : (
            <div></div>
          )}
        </div>
      )}
      {transition && !gameOver && (
        <TurnTransition callback={setTransition} player={activeName} />
      )}
      {gameOver && (
        <div>
          <h2>Game Over</h2>
          <h1>{`The winner is ${winner}`}</h1>
        </div>
      )}
    </div>
  );
};

export default Turn;
