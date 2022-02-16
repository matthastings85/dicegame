import React, { useContext } from "react";
import { Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Media from "react-media";

// Components
import Instructions from "../Instructions";
import ScoringPop from "../ScoringPop";
import ScorecardPop from "../ScorecardPop";

// Icon Styles
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

// Context
import { Context } from "../../context";

const Header = () => {
  const [_players, setPlayers, active, setActive, _gameOver, setGameOver] =
    useContext(Context);

  const newGame = () => {
    setActive(false);
    setPlayers([]);
    setGameOver(false);
  };

  return (
    <>
      <div className="header-bar"></div>
      <div className="header">
        <div className="head-left">
          <Instructions />
          <ScoringPop />
        </div>
        <div className="head-center">
          <h1 className="heading">FARKEL</h1>
        </div>
        <div className="head-right">
          {active && (
            <>
              <Media
                query="(max-width: 1000px)"
                render={() => <ScorecardPop />}
              />
              <Tooltip title="New Game" placement="bottom" arrow>
                <button className="no-styles" onClick={newGame}>
                  <FontAwesomeIcon icon={faPlusSquare} size="lg" id="newGame" />
                </button>
              </Tooltip>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
