import { useContext } from "react";

// Styles
import "./App.css";

// Context
import { Context } from "./context";

// Components
import Home from "./components/Home";
import Game from "./components/Game";

function App() {
  const [_players, _setPlayers, active, _setActive] = useContext(Context);
  return <div className="App">{!active ? <Home /> : <Game />}</div>;
}

export default App;
