import React, { useState } from "react";
import classes from "./Products.module.css";
import { FilterSection, ProductArea, SearchBar } from "../../components";

// import { useEffect } from "react";
// import { getProducts } from "../../lib/api";
// import useHttp from "../../hooks/use-http";

const Products = () => {
  // //////////////////////////////////
  // //Product Fetching
  // const {
  //   sendRequest,
  //   status,
  //   data: products,
  //   error,
  // } = useHttp(getProducts, true);

  // useEffect(() => {
  //   sendRequest();
  // }, [sendRequest]);
  // console.log(status);
  // console.log(products);

  //////////////////////////////////
  // Search & filter terms (lifting state up)
  const [searchData, setSearchData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const searchDataHandler = (searchTerms) => {
    setSearchData(searchTerms);
  };
  const filterDataHandler = (filterTerms) => {
    setFilterData(filterTerms);
  };

  return (
    <>
      <main className={classes.main}>
        <div className={classes.searchPosition}>
          <SearchBar onDataChange={searchDataHandler} />
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
