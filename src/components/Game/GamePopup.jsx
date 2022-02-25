import React from "react";

import classes from "./GamePopup.module.css";

const GamePopup = ({ popupInfo, nextStepHandler }) => {
  const { show: isShow, message, word, btnMessage } = popupInfo;
  return (
    <div
      className={`${classes["popup-container"]} ${isShow ? classes.show : ""}`}
      id="popup-container"
    >
      <div className={classes.popup}>
        <h2>{message}</h2>
        <h3>کلمه درست: {word}</h3>
        <button onClick={nextStepHandler}>{btnMessage}</button>
      </div>
    </div>
  );
};

export default GamePopup;
