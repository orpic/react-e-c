import React from "react";
import { CartItem } from "../../components";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.heading}>Shopping cart</p>
        <div className={classes.items}>
          <CartItem />
          <CartItem />

          <CartItem />
        </div>
        <p className={classes.totalAmount}>
          Total Amount: ₹<span>455</span>
        </p>
      </div>
    </>
  );
};

export const cartPath = "/cart";
export default Cart;
