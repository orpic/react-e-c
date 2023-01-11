import React from "react";
// eslint-disable-next-line
import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.imgPrice}>
          <img
            src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"
            className={classes.image}
            alt="prodct"
          />

          <div className={classes.namePrice}>
            <p>Product Name</p>
            <p>₹450</p>
          </div>
        </div>
        <div className={classes.quantityPrice}>
          <p>
            <span>x</span>3
          </p>
          <p>₹1350</p>
        </div>

        <div className={classes.buttonsArea}>
          <div>
            <button className={classes.addMoreButtons}>-</button>
            <button className={classes.addMoreButtons}>+</button>
          </div>
          <button className={classes.deleteButton}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
