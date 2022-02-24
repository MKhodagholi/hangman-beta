import React from "react";

import classes from "./GamePopup.module.css";

const GamePopup = () => {
  return (
    <div className={classes["popup-container"]} id="popup-container">
      <div className={classes.popup}>
        <h2 id="final-message">You Win!</h2>
        <button id="play-again">بازی مجدد</button>
      </div>
    </div>
  );
};

export default GamePopup;
