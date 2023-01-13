import React from "react";
// eslint-disable-next-line
import classes from "./CartItem.module.css";

const CartItem = ({ name, price, quantity }) => {
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
            <p>{name}</p>
            <p>₹{price}</p>
          </div>
        </div>
        <div className={classes.quantityPrice}>
          <p>
            <span>x</span>
            {quantity}
          </p>
          <p>₹{quantity * price}</p>
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
