import React from "react";

import classes from "./Register.module.css";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Register = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={classes.register}
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
        <button>ایجاد</button>
      </form>
    </motion.div>
  );
};

export default Register;
