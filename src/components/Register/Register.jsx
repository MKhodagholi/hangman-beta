import React from "react";

import classes from "./Register.module.css";

const Register = () => {
  return (
    <div className={classes.register}>
      <form action="">
        <div className={classes.inputs}>
          <input type="text" />
          <label htmlFor="username">نام کاربری</label>
        </div>
        <div className={classes.inputs}>
          <input type="password" />
          <label htmlFor="password">پسورد</label>
        </div>
        <button>ایجاد</button>
      </form>
    </div>
  );
};

export default Register;
