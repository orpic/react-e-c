import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { DialogBox } from "../../components";
// eslint-disable-next-line
import classes from "./ProductCard.module.css";
const ProductCard = ({
  id,
  quantity,
  productImage,
  productName,
  productPrice,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState({
    title: "",
    message: "",
  });
  const [quantityLeft, setQuantityLeft] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  // const products = useSelector((state) => state.product.products);
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    // const product = products.find((item) => item.id === id);

    const cartItem = cart.find((item) => item.id === id);
    console.log(cartItem);
    if (cartItem) {
      setQuantityLeft(quantity - cartItem.quantity);
      setCartQuantity(cartItem.quantity);
    } else {
      setQuantityLeft(quantity);
      setCartQuantity(0);
    }
  }, [quantity, cart, id]);

  const addToCartHandler = () => {
    console.log("clicked");
    console.log(quantityLeft, cartQuantity);
    if (quantityLeft > 0 && cartQuantity === 0) {
      console.log(" > 0 , === 0 ");
      dispatch(
        cartActions.addItemToCart({
          id: id,
          imageUrl: productImage,
          name: productName,
          price: productPrice,
        })
      );
    }
    if (quantityLeft > 0 && cartQuantity > 0) {
      console.log(" > 0 , > 0 ");
      //dialog box
      setIsOpen(true);
      setDialogMessage({ title: "Want more?", message: "Add on Cart page" });
    }
    if (quantityLeft === 0) {
      console.log(" === 0 ,  -- ");
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

            <button onClick={addToCartHandler} className={classes.btn}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
