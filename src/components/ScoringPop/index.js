import React, { useState } from "react";

// Components
import Scoring from "../Scoring";
import { Tooltip, Popover, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const ScoringPop = () => {
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
      <Tooltip title="Scoring" placement="bottom" arrow>
        <button
          className="no-styles"
          onClick={handleClick}
          aria-describedby={id}
        >
          <FontAwesomeIcon icon={faCircleCheck} size="lg" id="scoring" />
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
          sx={{ p: 0, minWidth: "350px", bgcolor: "#262626", color: "#a6a6a6" }}
        >
          <Scoring />
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

export default ScoringPop;
