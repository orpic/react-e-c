import React from "react";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div>
      <h2 className={classes.heading}>404</h2>
      <p className={classes.message}>Something's missing from our severs</p>
    </div>
  );
};

export default NotFound;
