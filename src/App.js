import { useContext } from "react";
import { use100vh } from "react-div-100vh";

// Styles
import "./App.css";

// Context
import { Context } from "./context";

// Components
import Home from "./components/Home";
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const height = use100vh();

  const [_players, _setPlayers, active, _setActive] = useContext(Context);
  return (
    <div style={{ height: height }} className="App">
      <Header />
      <div className="game-home-wrapper">{!active ? <Home /> : <Game />}</div>
      <Footer />
    </div>
  );
}

export default App;
