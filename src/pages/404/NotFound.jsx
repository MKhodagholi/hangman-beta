import React from "react";

import classes from "./NotFound.module.css";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const NotFound = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={classes["not-found"]}
    >
      <div className={classes.text}>صفحه مورد نظر پیدا نشد</div>
    </motion.div>
  );
};

export default NotFound;
