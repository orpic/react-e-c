import React from "react";
// eslint-disable-next-line
import classes from "./ProductArea.module.css";

import { ProductCard } from "../../components";

const ProductArea = () => {
  return (
    <div className={classes.area}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductArea;
