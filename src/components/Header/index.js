import React, { useContext, useState } from "react";
import { Tooltip, Popover, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Media from "react-media";

// Components
import Scorecard from "../Scorecard";
import Scoring from "../Scoring";
import Instructions from "../Instructions";
import ScoringPop from "../ScoringPop";
import ScorecardPop from "../ScorecardPop";

// Icon Styles
import {
  faCircleQuestion,
  faPlusSquare,
  faCircleCheck,
  faClipboard,
} from "@fortawesome/free-regular-svg-icons";

// Context
import { Context } from "../../context";

const Header = () => {
  const [_players, setPlayers, active, setActive, _gameOver, setGameOver] =
    useContext(Context);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
