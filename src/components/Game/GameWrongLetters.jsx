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
        {wrongLetters.map((letter, index) => (
          <div className={classes["wrong-letters"]} key={index}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameWrongLetters;
