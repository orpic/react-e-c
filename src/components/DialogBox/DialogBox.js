import React from "react";
//eslint-disbale-next-line
import classes from "./DialogBox.module.css";
const DialogBox = ({ isOpen, setIsOpen, dialogMessage }) => {
  const closeDialogHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${classes.dialogBox} ${isOpen ? classes.open : ""}`}>
      <div className={classes.dialogContent}>
        <p className={classes.title}>{dialogMessage.title}</p>
        <p className={classes.message}>{dialogMessage.message}</p>
        <div onClick={closeDialogHandler} className={classes.btn}>
          OK
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
