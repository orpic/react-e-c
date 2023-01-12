import React, { useEffect } from "react";
// eslint-disable-next-line
import classes from "./ProductArea.module.css";

import { LoadingSpinner, ProductCard } from "../../components";
import { useSelector } from "react-redux";
import { useSearchProducts } from "../../hooks";

const ProductArea = () => {
  //Getting Product current status
  const status = useSelector((state) => state.product.status);
  //Geting product list
  const productsList = useSelector((state) => state.product.products);
  //Getting search terms from search bar via store
  const searchTermList = useSelector((state) => state.search.terms);
  //Using search hook to filter the productList acc to search terms
  const { searchResults, setSearchTerms } = useSearchProducts(productsList);

  console.log(useSelector((state) => state.filter));

  useEffect(() => {
    setSearchTerms(searchTermList);
  }, [searchTermList, setSearchTerms]);

  ///////////////////////////////////
  // different states and fallback ui
  if (status === "pending") {
    return (
      <div className={classes.area}>
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className={classes.area}>
        <p className={classes.para}>An error occurred</p>
      </div>
    );
  }
  if (status === "empty") {
    return (
      <div className={classes.area}>
        <p className={classes.para}>No Data Found</p>
      </div>
    );
  }
  // fallback ui complete
  ///////////////////////////////////

  return (
    <div className={classes.area}>
      {searchResults.map((eachProduct) => (
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
