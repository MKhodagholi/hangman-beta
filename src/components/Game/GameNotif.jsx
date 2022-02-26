import React from "react";

import classes from "./GameNotif.module.css";

const NotifGame = ({ firstShow, isShow, message }) => {
  return (
    <div
      className={`${classes["notification-container"]} ${
        isShow ? classes.show : ""
      } ${isShow === null ? classes["first-show"] : ""}`}
      id="notification-container"
    >
      {message}
    </div>
  );
};

export default NotifGame;
