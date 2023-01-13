import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../../components";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);

  return (
    <>
      <div className={classes.container}>
        <p className={classes.heading}>Shopping cart</p>
        <div className={classes.items}>
          {cartItems.length === 0 && (
            <p className={classes.emptyPara}>Cart empty !</p>
          )}
          {cartItems.length > 0 &&
            cartItems.map((eachItem) => (
              <CartItem
                key={eachItem.id}
                name={eachItem.name}
                price={eachItem.price}
                quantity={eachItem.quantity}
              />
            ))}
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
