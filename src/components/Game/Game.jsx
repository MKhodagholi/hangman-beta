import React, { useState } from "react";

import classes from "./Game.module.css";

const shapes = (
  <svg height="250px" width="200px" className={classes["fiqure-container"]}>
    {/* <!-- root --> */}
    <line x1="40" y1="20" x2="120" y2="20" />
    <line x1="120" y1="20" x2="120" y2="60" />
    <line x1="40" y1="20" x2="40" y2="240" />
    <line x1="0" y1="240" x2="80" y2="240" />

    {/* <!-- head --> */}
    <circle cx="120" cy="80" r="20" className={classes["fiqure-part"]} />

    {/* <!-- body --> */}
    <line
      x1="120"
      y1="100"
      x2="120"
      y2="160"
      className={classes["fiqure-part"]}
    />

    {/* <!-- left hand --> */}
    <line
      x1="120"
      y1="130"
      x2="140"
      y2="110"
      className={classes["fiqure-part"]}
    />

    {/* <!-- right hand --> */}
    <line
      x1="120"
      y1="130"
      x2="100"
      y2="110"
      className={classes["fiqure-part"]}
    />

    {/* <!-- right leg --> */}
    <line
      x1="120"
      y1="160"
      x2="140"
      y2="180"
      className={classes["fiqure-part"]}
    />

    {/* <!-- left leg --> */}
    <line
      x1="120"
      y1="160"
      x2="100"
      y2="180"
      className={classes["fiqure-part"]}
    />
  </svg>
);

const Game = () => {
  const [useWords, setUseWords] = useState([]);
  const [wrongs, setWrongs] = useState([]);
  const words = ["اسون", "سخت", "خیلی سخت", "راحت تر"];
  const [notFarsi, setNotFarsi] = useState(false);
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)].split("")
  );
  const [wordsDOM, setWordsDOM] = useState(
    <>
      {currentWord.map(() => (
        <div className={classes.letter}></div>
      ))}
    </>
  );

  const persianLetter = [
    "آ",
    "ا",
    "ب",
    "پ",
    "ت",
    "ث",
    "ج",
    "چ",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "س",
    "ش",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ق",
    "ل",
    "م",
    "ن",
    "و",
    "ه",
    "ی",
  ];

  const keyDownHandler = (e) => {
    const inputChar = e.key;
    let flag = true;
    persianLetter.forEach((letter) => {
      let newWordDOM = "";
      if (inputChar === letter) {
        currentWord.forEach((letter) => {
          if (inputChar === letter) {
            newWordDOM += `<div className=${classes.letter}>${letter}</div>`;
          }
        });
        flag = false;
      } else {
        newWordDOM += `<div className=${classes.letter}></div>`;
      }
      setWordsDOM(newWordDOM);
    });
    if (flag) {
      setNotFarsi(true);
      setTimeout(() => setNotFarsi(false), 2000);
    }
    // if (e.key !== "")
  };

  return (
    <div className={classes.game} tabIndex={1} onKeyDown={keyDownHandler}>
      {shapes}
      <div className={classes.word} id="word">
        {wordsDOM}
      </div>

      <div
        className={classes["wrong-letters-container"]}
        id="wrong-letters-container"
      >
        <p>حروف اشتباه</p>
        <div className={classes["wrong-letters"]} id="wrong-letters"></div>
      </div>

      <div className={classes["popup-container"]} id="popup-container">
        <div className={classes.popup}>
          <h2 id="final-message">You Win!</h2>
          <button id="play-again">بازی مجدد</button>
        </div>
      </div>

      <div
        className={`${classes["notification-container"]} ${
          notFarsi ? classes.show : ""
        }`}
        id="notification-container"
      >
        لطفا زبان خود را به فارسی تبدیل کنید
      </div>
    </div>
  );
};

export default Game;
