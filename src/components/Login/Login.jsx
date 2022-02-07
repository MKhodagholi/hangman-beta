import React from "react";

import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      <form action="">
        <div className={classes.inputs}>
          <input type="text" />
          <label htmlFor="username">نام کاربری</label>
        </div>
        <div className={classes.inputs}>
          <input type="password" />
          <label htmlFor="password">پسورد</label>
        </div>
        <button>ورود</button>
      </form>
    </div>
  );
};

export default Login;
