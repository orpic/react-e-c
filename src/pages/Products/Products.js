import React from "react";
import { FilterSection, SearchBar } from "../../components";
// eslint-disable-next-line
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
        <div className={classes.productsPosition}>Product Area</div>
      </main>
    </>
  );
};

export const productsPath = "/products";
export default Products;
