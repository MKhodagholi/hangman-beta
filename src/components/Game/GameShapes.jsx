import React from "react";

import classes from "./GameShapes.module.css";

const GameShapes = ({ wrongArray }) => {
  return (
    <svg height="250px" width="200px" className={classes["fiqure-container"]}>
      {/* <!-- root --> */}
      <line x1="40" y1="20" x2="120" y2="20" />
      <line x1="120" y1="20" x2="120" y2="60" />
      <line x1="40" y1="20" x2="40" y2="240" />
      <line x1="0" y1="240" x2="80" y2="240" />

      {/* <!-- head --> */}
      <circle
        cx="120"
        cy="80"
        r="20"
        className={`${classes["fiqure-part"]} ${
          wrongArray.length >= 1 ? classes.show : ""
        }`}
      />

      {/* <!-- body --> */}
      <line
        x1="120"
        y1="100"
        x2="120"
        y2="160"
        className={`${classes["fiqure-part"]} ${
          wrongArray.length >= 2 ? classes.show : ""
        }`}
      />

      {/* <!-- left hand --> */}
      <line
        x1="120"
        y1="130"
        x2="140"
        y2="110"
        className={`${classes["fiqure-part"]} ${
          wrongArray.length >= 3 ? classes.show : ""
        }`}
      />

      {/* <!-- right hand --> */}
      <line
        x1="120"
        y1="130"
        x2="100"
        y2="110"
        className={`${classes["fiqure-part"]} ${
          wrongArray.length >= 4 ? classes.show : ""
        }`}
      />

      {/* <!-- right leg --> */}
      <line
        x1="120"
        y1="160"
        x2="140"
        y2="180"
        className={`${classes["fiqure-part"]} ${
          wrongArray.length >= 5 ? classes.show : ""
        }`}
      />

      {/* <!-- left leg --> */}
      <line
        x1="120"
        y1="160"
        x2="100"
        y2="180"
        className={`${classes["fiqure-part"]} ${
          wrongArray.length >= 6 ? classes.show : ""
        }`}
      />
    </svg>
  );
};

export default GameShapes;
