import React from "react";

import classes from "./Login.module.css";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Login = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={classes.login}
    >
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
    </motion.div>
  );
};

export default Login;
