import React from "react";
import { CartItem } from "../../components";
// eslint-disable-next-line
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.heading}>Shopping cart</p>
        <CartItem />
      </div>
    </>
  );
};

export const cartPath = "/cart";
export default Cart;
