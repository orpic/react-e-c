import React, { useEffect } from "react";
//eslint-disbale-next-line
import classes from "./DialogBox.module.css";
const DialogBox = ({ isOpen, setIsOpen, dialogMessage }) => {
  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    }

    return () => {
      clearTimeout(id);
    };
  }, [isOpen, setIsOpen]);

  const closeDialogHandler = () => {
    clearTimeout(id);
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
