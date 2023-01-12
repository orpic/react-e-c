import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
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
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        imageUrl: productImage,
        name: productName,
        price: productPrice,
      })
    );
  };
  return (
    <>
      <div className={classes.cardContainer}>
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
