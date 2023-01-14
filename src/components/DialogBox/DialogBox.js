import React from "react";
//eslint-disbale-next-line
import classes from "./DialogBox.module.css";
const DialogBox = ({ dialogIsOpen, dialogMessage }) => {
  return (
    <div className={`${classes.dialogBox} ${dialogIsOpen ? classes.open : ""}`}>
      <div className={classes.dialogContent}>
        <p className={classes.title}>{dialogMessage.title}</p>
        <p className={classes.message}>{dialogMessage.message}</p>
      </div>
    </div>
  );
};

export default DialogBox;
