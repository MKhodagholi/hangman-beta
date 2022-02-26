import React from "react";

import classes from "./GameLetters.module.css";

const GameLetters = ({ selectedWord, correctLetters }) => {
  return (
    <div className={classes.word} id="word">
      {selectedWord.split("").map((lett, index) => (
        <div className={classes.letter} key={index}>
          {correctLetters.includes(lett) ? lett : ""}
        </div>
      ))}
    </div>
  );
};

export default GameLetters;
