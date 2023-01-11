import React, { useEffect } from "react";
import { FilterSection, ProductArea, SearchBar } from "../../components";
import useHttp from "../../hooks/use-http";
import { getProducts } from "../../lib/api";
import classes from "./Products.module.css";

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
