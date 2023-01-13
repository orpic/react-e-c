import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../../components";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  // console.log(cartTotalAmount);
  const cartItems = useSelector((state) => state.cart.items);

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
                id={eachItem.id}
                name={eachItem.name}
                price={eachItem.price}
                quantity={eachItem.quantity}
              />
            ))}
        </div>
        {cartItems.length > 0 && (
          <p className={classes.totalAmount}>
            Total Amount: ₹<span>{cartTotalAmount}</span>
          </p>
        )}
      </div>
    </>
  );
};

export const cartPath = "/cart";
export default Cart;
