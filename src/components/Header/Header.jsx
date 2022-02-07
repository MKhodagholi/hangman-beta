import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li className={classes["hangman-icon"]}>
          <Link to="/">هنگمن</Link>
        </li>
        <div className={classes.register}>
          <li>
            <Link to="/login">ورود</Link>
          </li>
          <li>
            <Link to="/register">ثبت نام</Link>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Header;
