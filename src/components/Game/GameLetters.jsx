import React from "react";

import classes from "./GameLetters.module.css";

const GameLetters = ({ wordDOM }) => {
  return (
    <div className={classes.word} id="word">
      {wordDOM.map((lett, index) => (
        <div className={classes.letter} key={index}>
          {lett}
        </div>
      ))}
    </div>
  );
};

export default GameLetters;
