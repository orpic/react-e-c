import React, { useEffect, useState } from "react";
import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";

import { DialogBox } from "../../components";
import { cartActions } from "../../store/cartSlice";
import {
  useDialogMessage,
  useDialogTimeout,
  useIncreaseSingleItemInCart,
} from "../../hooks";

const CartItem = ({ id, name, imageURL, price, quantity }) => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.product.products);
  const [quantityLeft, setQuantityLeft] = useState(0);

  const [isDialogOpen, setIsDialogOpen] = useDialogTimeout();
  const [dialogMessage, setDialogMessage] = useDialogMessage();

  const { increaseCartItem } = useIncreaseSingleItemInCart(
    setIsDialogOpen,
    setDialogMessage
  );

  useEffect(() => {
    const productItem = productsList.find((item) => item.id === id);
    setQuantityLeft(productItem.quantity - quantity);
  }, [productsList, quantity, id]);

  const increaseCartHandler = () => {
    increaseCartItem(quantityLeft, id, quantity);
  };

  const decreaseCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };
  return (
    <>
      <div className={classes.container}>
        <DialogBox dialogIsOpen={isDialogOpen} dialogMessage={dialogMessage} />
        <div className={classes.imgPrice}>
          <img src={imageURL} className={classes.image} alt="product" />

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
            <button
              onClick={decreaseCartHandler}
              className={classes.addMoreButtons}
            >
              -
            </button>
            <button
              onClick={increaseCartHandler}
              className={classes.addMoreButtons}
            >
              +
            </button>
          </div>
          <button
            onClick={removeFromCartHandler}
            className={classes.deleteButton}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
