import React, { useEffect, useState } from "react";

import classes from "./GamePage.module.css";

import GameShapes from "../../components/Game/GameShapes";
import GameLetters from "../../components/Game/GameLetters";
import GameWrongLetters from "../../components/Game/GameWrongWords";
import GameNotif from "../../components/Game/GameNotif";
import GamePopup from "../../components/Game/GamePopup";

const Game = () => {
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [words, setWords] = useState(["اسون", "سخت", "خیلی سخت", "راحت تر"]);
  const [selectedWord, setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [wordDOM, setWordDOM] = useState(
    selectedWord.split("").map(() => <div className={classes.letter}></div>)
  );
  const [notifInfo, setNotifInfo] = useState({
    show: false,
    message: "",
  });
  const persianLetter = "آابپتثجچحخدذرزسشطظصضکگعغفقلمنوهی";

  const showNotif = (message) => {
    setNotifInfo({
      show: true,
      message,
    });
    setTimeout(() => {
      setNotifInfo((prev) => ({ ...prev, show: false }));
    }, 2000);
  };

  const keyDownHandler = (e) => {
    const inputChar = e.key;
    if (persianLetter.includes(inputChar)) {
      if (selectedWord.includes(inputChar)) {
        if (!correctLetters.includes(inputChar)) correctLetters.push(inputChar);
      } else if (!wrongLetters.includes(inputChar)) {
        wrongLetters.push(inputChar);
      } else showNotif("شما قبلا از این حرف استفاده کرده اید");
    } else showNotif("لطفا کیبورد خود را فارسی کنید");
  };

  return (
    <div className={classes.game} tabIndex={1} onKeyDown={keyDownHandler}>
      <GameShapes />
      <GameLetters />
      <GameWrongLetters />
      <GamePopup />
      <GameNotif isShow={notifInfo.show} message={notifInfo.message} />
    </div>
  );
};

export default Game;
