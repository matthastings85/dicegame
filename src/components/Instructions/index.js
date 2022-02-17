import React, { useState } from "react";

// Components
import { Tooltip, Popover, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icon
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

const Instructions = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Tooltip title="Instructions" placement="bottom" arrow>
        <button
          className="no-styles"
          onClick={handleClick}
          aria-describedby={id}
        >
          <FontAwesomeIcon icon={faCircleQuestion} size="lg" id="question" />
        </button>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{ p: 2, bgcolor: "#262626", maxWidth: "600px", color: "#a6a6a6" }}
        >
          <div className="instructions-pop">
            <h2>Farkel is a classic dice rolling, risk taking game.</h2>
            <p>
              <strong>Object</strong>: Be the player with the highest score over
              10,000.
            </p>
            <h4>Gameplay</h4>
            <ul>
              <li>
                A player's turn begins by rolling all six Dice. After each roll,
                select Dice that are worth points for scoring (see scoring tab
                above). You must remove at least one Dice after each roll.
              </li>
              <li>
                To get on the Scorecard for the first time, you must have at
                least 500 points before you stop rolling.
              </li>
              <li>
                If you’re lucky enough to select all six Dice, you can roll them
                all again to build your round total.
              </li>
              <li>
                If you cannot select any Dice after a roll, that’s a Farkel. You
                lose your round total and play passes to the next player. A
                Farkel could happen on your first roll or when you roll the
                remaining Dice.
              </li>
              <li>
                After your first score of 500 points or more is recorded, you
                may stop rolling at any time and add your round total to your
                accumulated score.
              </li>
            </ul>
            <p>
              <strong>Winning</strong>: When a player’s accumulated score is
              10,000 or more, each of the other players has one last turn to
              beat that total. The player with the highest score wins.
            </p>
          </div>
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </Popover>
    </>
  );
};
export default Instructions;
