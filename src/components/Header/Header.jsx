import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li className={classes["hangman-icon"]}>
          <a href="#">هنگمن</a>
        </li>
        <div className={classes.register}>
          <li>
            <a href="#singin">ورود</a>
          </li>
          <li>
            <a href="#singup">ثبت نام</a>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Header;
