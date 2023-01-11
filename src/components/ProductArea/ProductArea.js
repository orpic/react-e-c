import React from "react";
// eslint-disable-next-line
import classes from "./ProductArea.module.css";

import { LoadingSpinner, ProductCard } from "../../components";

const ProductArea = ({ stats, products, error }) => {
  // const {
  //   sendRequest,
  //   status,
  //   data: products,
  //   error,
  // } = useHttp(getProducts, true);

  // useEffect(() => {
  //   sendRequest();
  // }, [sendRequest]);

  if (stats === "pending") {
    return (
      <div className={classes.area}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className={classes.area}>{error}</div>;
  }

  if (stats === "completed" && (!products || products.length === 0)) {
    return (
      <div className={classes.area}>
        <span>No Products</span>
      </div>
    );
  }

  return (
    <div className={classes.area}>
      {products.map((eachProduct) => (
        <ProductCard
          key={eachProduct.id}
          productImage={eachProduct.imageURL}
          productName={eachProduct.name}
          productPrice={eachProduct.price}
        />
      ))}
    </div>
  );
};

export default ProductArea;
