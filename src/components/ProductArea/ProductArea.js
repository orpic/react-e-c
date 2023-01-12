import React from "react";
// eslint-disable-next-line
import classes from "./ProductArea.module.css";

import { LoadingSpinner, ProductCard } from "../../components";

const ProductArea = ({ searchText, status, products, error }) => {
  ///////////////////////////////////
  // different states and fallback
  if (status === "pending") {
    return (
      <div className={classes.area}>
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className={classes.area}>
        <p>{error}</p>
      </div>
    );
  }
  if (status === "completed" && (!products || products.length === 0)) {
    return (
      <div className={classes.area}>
        <p>No Data Found</p>
      </div>
    );
  }
  // fallback complete
  ///////////////////////////////////
  // const searchText = ["polo", "green"];
  console.log(searchText);
  const searchProducts = (productsList, searchText) => {
    return productsList.filter((product) =>
      searchText.every(
        (text) =>
          product.name.toLowerCase().includes(text.toLowerCase()) ||
          product.color.toLowerCase().includes(text.toLowerCase()) ||
          product.type.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const searchResult = searchProducts(products, searchText);
  console.log(searchResult);

  return (
    <div className={classes.area}>
      {searchResult.map((eachProduct) => (
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
