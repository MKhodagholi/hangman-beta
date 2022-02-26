import React, { useState } from "react";

import classes from "./GamePage.module.css";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

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
  const [notifInfo, setNotifInfo] = useState({
    show: null,
    message: "",
  });
  const [gameIsOver, setGameIsOver] = useState(false);

  const [popupInfo, setPopupInfo] = useState({
    show: false,
    message: "",
    word: "",
    btnMessage: "",
  });
  const nextStepHandler = () => {
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    setCorrectLetters([]);
    setWrongLetters([]);
    setGameIsOver(false);
    setPopupInfo((prev) => ({ ...prev, show: false }));
  };
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

  const gameOver = (selectedWord, correctArray, wrongArray) => {
    let correctWord = "";
    selectedWord.split("").map((letter) => {
      correctWord += correctArray.includes(letter) ? letter : "";
    });
    if (selectedWord === correctWord) {
      playAgainHandler(false);
      setGameIsOver(true);
    } else if (wrongArray.length === 6) {
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
          const newArray = [...correctLetters];
          newArray.push(inputChar);
          setCorrectLetters(newArray);
          gameOver(selectedWord, newArray.join(""), wrongLetters);
        } else showNotif("شما قبلا از این حرف استفاده کرده اید");
      } else if (!wrongLetters.includes(inputChar)) {
        setWrongLetters((prevState) => {
          const newArray = [...prevState, inputChar];
          gameOver(selectedWord, correctLetters.join(""), newArray);
          return newArray;
        });
      } else showNotif("شما قبلا از این حرف استفاده کرده اید");
    } else showNotif("لطفا کیبورد خود را فارسی کنید");
  };

  return (
    <motion.div
      className={classes.game}
      tabIndex={1}
      onKeyDown={keyDownHandler}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <GameShapes wrongArray={wrongLetters} />
      <GameLetters
        selectedWord={selectedWord}
        correctLetters={correctLetters}
      />
      <GameWrongLetters wrongLetters={wrongLetters} />
      <GamePopup popupInfo={popupInfo} nextStepHandler={nextStepHandler} />
      <GameNotif isShow={notifInfo.show} message={notifInfo.message} />
    </motion.div>
  );
};

export default Game;
