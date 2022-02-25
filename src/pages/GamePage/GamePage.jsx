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
  const words = ["اسون", "سخت", "بقالی", "روزنامه"];
  const [selectedWord, setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const araryEmpty = selectedWord.split("").map(() => "");
  const [wordDOM, setWordDOM] = useState(araryEmpty);
  const [notifInfo, setNotifInfo] = useState({
    show: false,
    message: "",
  });
  const [gameIsOver, setGameIsOver] = useState(false);
  const nextStepHandler = () => {
    setSelectedWord((prev) => words[Math.floor(Math.random() * words.length)]);
    setWordDOM(araryEmpty);
    setCorrectLetters([]);
    setWrongLetters([]);
    setGameIsOver(false);
    setPopupInfo((prev) => ({ ...prev, show: false }));
  };
  const [popupInfo, setPopupInfo] = useState({
    show: false,
    message: "",
    word: "",
    btnMessage: "",
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

  const playAgainHandler = (isFail) => {
    let message = isFail ? "کلمه را درست حدس نزدی" : "آفرین درست حدس زدی";
    let btnMessage = isFail ? "بازی مجدد" : "بزن بریم مرحله بعد";
    setPopupInfo({
      show: true,
      message,
      word: selectedWord,
      btnMessage,
    });
  };

  const gameOver = (selectedWord, correctWord, wrongWord) => {
    if (selectedWord === correctWord) {
      playAgainHandler(false);
      setGameIsOver(true);
    }
    if (wrongWord.length === 5) {
      playAgainHandler(true);
      setGameIsOver(true);
    }
  };

  const keyDownHandler = (e) => {
    const inputChar = e.key;
    if (gameIsOver) return;
    if (persianLetter.includes(inputChar)) {
      if (selectedWord.includes(inputChar)) {
        if (!correctLetters.includes(inputChar)) {
          correctLetters.push(inputChar);
          const word = selectedWord
            .split("")
            .map((letter) => (correctLetters.includes(letter) ? letter : ""));
          setWordDOM(word);
          gameOver(
            selectedWord,
            correctLetters.join(""),
            wrongLetters.join("")
          );
        } else showNotif("شما قبلا از این حرف استفاده کرده اید");
      } else if (!wrongLetters.includes(inputChar)) {
        setWrongLetters((prevState) => {
          const newArray = [...prevState, inputChar];
          gameOver(selectedWord, correctLetters.join(""), newArray.join(""));
          return newArray;
        });
      } else showNotif("شما قبلا از این حرف استفاده کرده اید");
    } else showNotif("لطفا کیبورد خود را فارسی کنید");
  };

  return (
    <div className={classes.game} tabIndex={1} onKeyDown={keyDownHandler}>
      <GameShapes />
      <GameLetters wordDOM={wordDOM} />
      <GameWrongLetters wrongLetters={wrongLetters} />
      <GamePopup popupInfo={popupInfo} nextStepHandler={nextStepHandler} />
      <GameNotif isShow={notifInfo.show} message={notifInfo.message} />
    </div>
  );
};

export default Game;
