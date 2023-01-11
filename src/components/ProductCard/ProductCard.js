import React from "react";
// eslint-disable-next-line
import classes from "./ProductCard.module.css";
const ProductCard = ({ productImage, productName, productPrice }) => {
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
              {productPrice}`
            </p>

            <button className={classes.btn}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
