import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../../components";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <div className={classes.container}>
        <p className={classes.heading}>Shopping cart</p>
        <div className={classes.items}>
          {cartItems.length === 0 && (
            <p className={classes.emptyPara}>Cart empty !</p>
          )}
          <CartItem />
        </div>
        {cartItems.length !== 0 && (
          <p className={classes.totalAmount}>
            Total Amount: ₹<span>455</span>
          </p>
        )}
      </div>
    </>
  );
};

export const cartPath = "/cart";
export default Cart;
