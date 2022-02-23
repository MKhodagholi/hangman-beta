import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Register.module.css";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import users from "../../users.json";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  console.log(users);

  const usernameChangeHandler = (e) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, usernmae: e.target.value }));
  };

  const passwordChangeHandler = (e) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, password: e.target.value }));
  };

  // console.log()

  const submitHandler = () => {
    fetch("https://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={classes.register}
    >
      <form>
        <div className={classes.inputs}>
          <input type="text" onChange={usernameChangeHandler} />
          <label htmlFor="username">نام کاربری</label>
          <span className={classes.border}></span>
        </div>
        <div className={classes.inputs}>
          <input type="password" onChange={passwordChangeHandler} />
          <label htmlFor="password">پسورد</label>
          <span className={classes.border}></span>
        </div>
        <button onClick={submitHandler}>ایجاد</button>
      </form>
    </motion.div>
  );
};

export default Register;
