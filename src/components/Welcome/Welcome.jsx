import React from "react";

import classes from "./Welcome.module.css";
//Aniamtion
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Welcome = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={classes.welcome}
    >
      <div className={classes.about}>
        نوعی بازی حدس زدنی و قلم‌کاغذی است که دو نفر یا بیشتر بازی می‌کنند و به
        عنوان بازی آموزشی برای زبان آموزان نیز کاربرد دارد. در این بازی، یکی از
        بازیکن‌ها (یا گروه‌ها) کلمه‌ای انتخاب می‌کند. طرف دیگر باید با حدس زدن
        حروف، به آن کلمه دست پیدا کند. با هر حدس نادرست، یکی از اعضای بدن آدمک
        آویزان که نماد بازیکن حدس زننده است رسم می‌شود و او یک گام به دار زدن
        نزدیک می‌گردد. بازی می‌تواند به‌گونه‌ای طراحی شود که در شش مرحله به
        اتمام برسد، البته می‌توان به تعداد مراحل افزود، که برای سطوح ساده‌تر
        است، اما نُرم بازی، شش مرحله‌ای است.
      </div>
      <img
        src={require("../../asset/img/hangman-welcome.png")}
        alt="hangman-welcome"
      />
    </motion.div>
  );
};

export default Welcome;
