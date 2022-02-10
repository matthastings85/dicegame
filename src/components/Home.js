import React, { useState, useContext } from "react";

// Components
import Button from "./Button";

// Context
import { Context } from "../context";

const Home = () => {
  const [players, setPlayers, active, setActive] = useContext(Context);
  const [input, setInput] = useState("");
  const [playerArr, setPlayerArr] = useState([]);

  const addPlayer = () => {
    // Create a state object for each player.
    let player = {
      player: playerArr.length + 1,
      name: input,
      score: 0,
      myTurn: false,
    };
    setPlayerArr([...playerArr, player]);
    setInput("");
  };

  const loadGame = () => {
    playerArr[0].myTurn = true;
    setPlayers(playerArr);
    setActive(true);
    console.log("Load Game");
    console.log(players);
  };

  return (
    <div>
      <h1>Wecome to Beauregard!</h1>
      {!active ? (
        <div>
          <input
            type="text"
            placeholder="Enter Player Name"
            onChange={(event) => setInput(event.currentTarget.value)}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                addPlayer();
              }
            }}
            value={input}
          />
          <Button id="add-player" text="Add Player" callback={addPlayer} />
          <Button text="Load New Game" callback={loadGame} />
        </div>
      ) : (
        <h2>Let's Begin!</h2>
      )}
      <ul id="player-list">
        {playerArr.map((player) => {
          return (
            <li key={player.name}>
              Player {player.player}: {player.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
