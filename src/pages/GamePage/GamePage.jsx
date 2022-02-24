import React, { useState } from "react";

import classes from "./GamePage.module.css";

import GameShapes from "../../components/Game/GameShapes";
import GameLetters from "../../components/Game/GameLetters";
import GameWrongLetters from "../../components/Game/GameWrongLetters";
import GameNotif from "../../components/Game/GameNotif";
import GamePopup from "../../components/Game/GamePopup";

const Game = () => {
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [words, setWords] = useState(["اسون", "سخت", "بقالی", "روزنامه"]);
  const [selectedWord, setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const araryEmpty = selectedWord.split("").map(() => "");
  const [wordDOM, setWordDOM] = useState(araryEmpty);
  console.log(wordDOM);
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
        if (!correctLetters.includes(inputChar)) {
          correctLetters.push(inputChar);
          const word = selectedWord
            .split("")
            .map((letter) => (correctLetters.includes(letter) ? letter : ""));
          setWordDOM(word);
        } else showNotif("شما قبلا از این حرف استفاده کرده اید");
      } else if (!wrongLetters.includes(inputChar)) {
        {
          setWrongLetters((prev) => {
            const newArary = [...prev];
            newArary.push(inputChar);
            return newArary;
          });
        }
      } else showNotif("شما قبلا از این حرف استفاده کرده اید");
    } else showNotif("لطفا کیبورد خود را فارسی کنید");
  };

  return (
    <div className={classes.game} tabIndex={1} onKeyDown={keyDownHandler}>
      <GameShapes />
      <GameLetters wordDOM={wordDOM} />
      <GameWrongLetters wrongLetters={wrongLetters} />
      <GamePopup />
      <GameNotif isShow={notifInfo.show} message={notifInfo.message} />
    </div>
  );
};

export default Game;
