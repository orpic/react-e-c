import React from "react";
// eslint-disable-next-line
import classes from "./ProductCard.module.css";
const ProductCard = () => {
  return (
    <>
      <div className={classes.cardContainer}>
        <img
          className={classes.productImage}
          src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"
          alt="product"
        />
        <div className={classes.productDetails}>
          <div className={classes.productName}>Hello</div>

          <div className={classes.priceCart}>
            <p className={classes.price}>₹500</p>

            <button className={classes.btn}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
