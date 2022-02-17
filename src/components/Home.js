import React, { useState, useContext } from "react";
import Media from "react-media";

// Components
import Button from "./Button";
import { fiveLarge, five } from "../utilities";

// Context
import { Context } from "../context";

const Home = () => {
  const [_players, setPlayers, _active, setActive] = useContext(Context);
  const [input, setInput] = useState("");
  const [playerArr, setPlayerArr] = useState([]);

  const addPlayer = () => {
    if (input === "") {
      return;
    }
    // Create a state object for each player.
    let player = {
      player: playerArr.length + 1,
      name: input,
      score: 0,
      myTurn: false,
      endGame: false,
    };

    setPlayerArr([...playerArr, player]);
    setInput("");
  };

  const loadGame = () => {
    playerArr[0].myTurn = true;
    setPlayers(playerArr);
    setActive(true);
  };

  return (
    <div className="home-wrapper">
      <Media query="(min-width: 600px)" render={() => fiveLarge} />
      <Media query="(max-width: 600px)" render={() => five} />
      <h2 className="purple">
        Farkel is a classic dice rolling, risk taking game.
      </h2>
      <h4>Add 2 or more players to begin</h4>
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
      {playerArr.length > 0 && <h3>Players</h3>}
      <ul id="player-list">
        {playerArr.map((player) => {
          return (
            <li key={player.name}>
              Player {player.player}: {player.name}
            </li>
          );
        })}
      </ul>
      {playerArr.length > 1 && (
        <Button text="Start New Game" callback={loadGame} />
      )}
    </div>
  );
};

export default Home;
