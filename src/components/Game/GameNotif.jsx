import React from "react";

import classes from "./GameNotif.module.css";

const NotifGame = ({ isShow, message }) => {
  return (
    <div
      className={`${classes["notification-container"]} ${
        isShow ? classes.show : ""
      }`}
      id="notification-container"
    >
      {message}
    </div>
  );
};

export default NotifGame;
