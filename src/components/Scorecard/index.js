import React, { useContext } from "react";

import { Context } from "../../context";

const Scorecard = () => {
  const [players, setPlayers, active, setActive] = useContext(Context);

  return (
    <div className="scorecard">
      <h2>Scorecard</h2>
      {players.map((player) => {
        return (
          <div key={player.name}>
            {player.name}: {player.score}
          </div>
        );
      })}
    </div>
  );
};

export default Scorecard;
