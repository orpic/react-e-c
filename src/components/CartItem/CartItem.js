import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import DialogBox from "../DialogBox/DialogBox";
// eslint-disable-next-line
import classes from "./CartItem.module.css";

const CartItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.product.products);
  const [quantityLeft, setQuantityLeft] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState({
    title: "",
    message: "",
  });

  useEffect(() => {
    const productItem = productsList.find((item) => item.id === id);
    setQuantityLeft(productItem.quantity - quantity);
  }, [productsList, quantity, id]);

  ///////////////////////////////////////
  // removing the dialog after a timeout
  useEffect(() => {
    const tim = setTimeout(() => {
      if (isOpen) {
        setIsOpen(false);
      }
    }, 4500);

    return () => {
      clearTimeout(tim);
    };
  }, [isOpen, setIsOpen]);

  // increase single piece in cart
  const increaseCartHandler = () => {
    if (quantityLeft > 0) {
      dispatch(
        cartActions.addItemToCart({
          id: id,
        })
      );
    } else {
      //open the diaolog
      setIsOpen(true);
      //dialog message
      setDialogMessage({
        title: "Limited Stock",
        message: `We only have ${quantity} piece(s) in our store`,
      });
    }
  };

  //remove single piece from cart
  const decreaseCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };
  return (
    <>
      <div className={classes.container}>
        <DialogBox
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dialogMessage={dialogMessage}
        />
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
