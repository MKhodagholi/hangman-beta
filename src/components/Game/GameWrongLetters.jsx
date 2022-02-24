import React from "react";

import classes from "./GameWrongLetters.module.css";

const GameWrongLetters = ({ wrongLetters }) => {
  return (
    <div
      className={classes["wrong-letters-container"]}
      id="wrong-letters-container"
    >
      <p>حروف اشتباه</p>
      <div className={classes["wrong-letters"]} id="wrong-letters">
        {wrongLetters.map((letter) => (
          <div className={classes["wrong-letters"]}>{letter}</div>
        ))}
      </div>
    </div>
  );
};

export default GameWrongLetters;
