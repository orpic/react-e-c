import React from "react";
import classes from "./Products.module.css";
import { FilterSection, ProductArea, SearchBar } from "../../components";

import { useEffect } from "react";
import { getProducts } from "../../lib/api";
import useHttp from "../../hooks/use-http";

const Products = () => {
  const {
    sendRequest,
    status,
    data: products,
    error,
  } = useHttp(getProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  console.log(status);
  console.log(products);

  // const searchText = ["polo", "green"];
  // const searchProducts = (productsList, searchText) => {
  //   return productsList.filter((product) =>
  //     searchText.every(
  //       (text) =>
  //         product.name.toLowerCase().includes(text.toLowerCase()) ||
  //         product.color.toLowerCase().includes(text.toLowerCase()) ||
  //         product.type.toLowerCase().includes(text.toLowerCase())
  //     )
  //   );
  // };

  // const searchResult = searchProducts(products, searchText);
  // console.log(searchResult);

  // const filterProducts = products.filter((item) => {
  // item.type.toLowerCase().includes(searchText.toLowerCase());
  // });
  // console.log(filterProducts);
  // const searchingFunction = () => {};

  return (
    <>
      <main className={classes.main}>
        <div className={classes.searchPosition}>
          <SearchBar />
        </div>
        <div className={classes.filterPosition}>
          <FilterSection />
        </div>
        <div className={classes.productsPosition}>
          <ProductArea status={status} products={products} error={error} />
        </div>
      </main>
    </>
  );
};

export const productsPath = "/products";
export default Products;
