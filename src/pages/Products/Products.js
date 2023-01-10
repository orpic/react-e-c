import React from "react";
import { FilterSection, ProductArea, SearchBar } from "../../components";
import classes from "./Products.module.css";

const Products = () => {
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
          <ProductArea />
        </div>
      </main>
    </>
  );
};

export const productsPath = "/products";
export default Products;
