import React, { useEffect, useState } from "react";
import classes from "./ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cartSlice";
import { DialogBox } from "../../components";
import { useDialogMessage, useDialogTimeout } from "../../hooks";
const ProductCard = ({
  id,
  quantity,
  productImage,
  productName,
  productPrice,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const [quantityLeft, setQuantityLeft] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useDialogTimeout();
  const [dialogMessage, setDialogMessage] = useDialogMessage();

  useEffect(() => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      setQuantityLeft(quantity - cartItem.quantity);
      setCartQuantity(cartItem.quantity);
    } else {
      setQuantityLeft(quantity);
      setCartQuantity(0);
    }
  }, [quantity, cart, id]);

  // increase single piece in cart
  const increaseCartHandler = () => {
    if (quantityLeft > 0) {
      dispatch(
        cartActions.addItemToCart({
          id: id,
        })
      );
    } else {
      setIsDialogOpen(true);
      setDialogMessage({
        title: "Limited Stock",
        message: `We only have ${quantity} piece(s) in our store`,
      });
    }
  };

  // remove single piece in cart
  const decreaseCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  // first time product add to cart
  const addToCartHandler = () => {
    if (quantityLeft > 0 && cartQuantity === 0) {
      dispatch(
        cartActions.addItemToCart({
          id: id,
          imageURL: productImage,
          name: productName,
          price: productPrice,
        })
      );
    }

    // if initial product quantity is 0
    if (quantityLeft === 0) {
      setIsDialogOpen(true);
      setDialogMessage({
        title: "Stock out",
        message: "We will re-stock soon",
      });
    }
  };

  return (
    <>
      <div className={classes.cardContainer}>
        <DialogBox dialogIsOpen={isDialogOpen} dialogMessage={dialogMessage} />
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
