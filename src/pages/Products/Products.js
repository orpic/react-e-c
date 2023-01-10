import React from "react";
import { FilterSection, SearchBar } from "../../components";
// eslint-disable-next-line
import classes from "./Products.module.css";

const Products = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.search}>
          <SearchBar />
        </div>
        <FilterSection />
        <div>Product Area</div>
      </main>
    </>
  );
};

export const productsPath = "/products";
export default Products;
