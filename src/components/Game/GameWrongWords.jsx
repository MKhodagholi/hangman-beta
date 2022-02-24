import React from "react";

import classes from "./GameWrongLetters.module.css";

const GameWrongLetters = () => {
  return (
    <div
      className={classes["wrong-letters-container"]}
      id="wrong-letters-container"
    >
      <p>حروف اشتباه</p>
      <div className={classes["wrong-letters"]} id="wrong-letters"></div>
    </div>
  );
};

export default GameWrongLetters;
