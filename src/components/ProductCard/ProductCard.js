import React, { useEffect, useState } from "react";
import classes from "./ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cartSlice";
import { DialogBox } from "../../components";
const ProductCard = ({
  id,
  quantity,
  productImage,
  productName,
  productPrice,
}) => {
  const dispatch = useDispatch();
  ///////////////////////////////////////
  //dialog control and message
  const [isOpen, setIsOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState({
    title: "",
    message: "",
  });

  // quantity left for us to add
  const [quantityLeft, setQuantityLeft] = useState(0);
  // for setting cart quantity (cart may not have item yet)
  const [cartQuantity, setCartQuantity] = useState(0);
  const cart = useSelector((state) => state.cart.items);

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

  ///////////////////////////////////////
  // setting values
  useEffect(() => {
    const cartItem = cart.find((item) => item.id === id);
    // console.log(cartItem);
    if (cartItem) {
      setQuantityLeft(quantity - cartItem.quantity);
      setCartQuantity(cartItem.quantity);
    } else {
      setQuantityLeft(quantity);
      setCartQuantity(0);
    }
  }, [quantity, cart, id]);

  ///////////////////////////////////////
  // increase already present item in cart
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

  ///////////////////////////////////////
  //remove single piece from cart
  const decreaseCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  // adding for first time
  const addToCartHandler = () => {
    // console.log(quantityLeft, cartQuantity);

    // if adding for first time
    if (quantityLeft > 0 && cartQuantity === 0) {
      // console.log(" > 0 , === 0 ");
      dispatch(
        cartActions.addItemToCart({
          id: id,
          imageUrl: productImage,
          name: productName,
          price: productPrice,
        })
      );
    }

    // if product quantity is 0
    if (quantityLeft === 0) {
      // console.log(" === 0 ,  -- ");
      //dialog box
      setIsOpen(true);
      setDialogMessage({
        title: "Stock out",
        message: "We will re-stock soon",
      });
    }
  };

  return (
    <>
      <div className={classes.cardContainer}>
        <DialogBox
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dialogMessage={dialogMessage}
        />
        <img
          className={classes.productImage}
          src={productImage}
          alt="product"
        />
        <div className={classes.productDetails}>
          <div className={classes.productName}>{productName}</div>

          <div className={classes.priceCart}>
            <p className={classes.price}>
              <span>₹</span>
              {productPrice}
            </p>

            {cartQuantity === 0 && (
              <button onClick={addToCartHandler} className={classes.btn}>
                Add to Cart
              </button>
            )}
            {cartQuantity > 0 && (
              <div className={classes.buttonsArea}>
                <button onClick={decreaseCartHandler} className={classes.btn}>
                  -
                </button>
                <p>{cartQuantity}</p>
                <button onClick={increaseCartHandler} className={classes.btn}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
