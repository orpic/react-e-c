import React from "react";
// eslint-disable-next-line
import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <>
      <div className={classes.container}>
        <img
          src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"
          className={classes.image}
          alt="prodct"
        />
        <div className={classes.namePrice}>
          <p>Product Name</p>
          <p>₹450</p>
        </div>
        <div className={classes.quantity}></div>
        <div className={classes.deleteButton}></div>
      </div>
    </>
  );
};

export default CartItem;
