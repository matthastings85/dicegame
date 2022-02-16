import React, { useContext } from "react";

import { Context } from "../../context";

const Scorecard = () => {
  const [players, _setPlayers, _active, _setActive] = useContext(Context);

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
