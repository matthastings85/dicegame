import React, { useState, createContext } from "react";

export const Context = createContext();

const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState(undefined);
  const [active, setActive] = useState(false);

  return (
    <Context.Provider value={[players, setPlayers, active, setActive]}>
      {children}
    </Context.Provider>
  );
};

export default PlayerProvider;
