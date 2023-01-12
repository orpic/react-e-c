import React, { useEffect } from "react";
// eslint-disable-next-line
import classes from "./ProductArea.module.css";

import { LoadingSpinner, ProductCard } from "../../components";
import { useSelector } from "react-redux";
import { useFilterProducts, useSearchProducts } from "../../hooks";

const ProductArea = () => {
  //Getting Product current status
  const status = useSelector((state) => state.product.status);
  //Geting product list
  const productsList = useSelector((state) => state.product.products);
  //Getting search terms from search bar via store
  const searchTermList = useSelector((state) => state.search.terms);
  //Using search hook search in free text in productList acc to search terms
  const { searchResults, setSearchTerms } = useSearchProducts(productsList);

  //Getting checkBoxList
  const checkBoxList = useSelector((state) => state.filter);
  //Using filter hook to filter
  const { filteredProducts, setCheckboxState } = useFilterProducts(
    checkBoxList,
    searchResults
  );

  useEffect(() => {
    setSearchTerms(searchTermList);
  }, [searchTermList, setSearchTerms]);

  useEffect(() => {
    setCheckboxState(checkBoxList);
  }, [checkBoxList, setCheckboxState]);

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
      {filteredProducts.map((eachProduct) => (
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
