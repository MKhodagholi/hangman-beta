import React from "react";

import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes["not-found"]}>
      <div className={classes.text}>صفحه مورد نظر پیدا نشد</div>
    </div>
  );
};

export default NotFound;
