import { useState, useEffect } from "react";

function useFilterProducts(initialCheckboxState, productsList) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [checkboxState, setCheckboxState] = useState(initialCheckboxState);

  useEffect(() => {
    const color = checkboxState.color
      .filter((c) => c.checkState)
      .map((c) => c.value);
    const gender = checkboxState.gender
      .filter((g) => g.checkState)
      .map((g) => g.value);
    const type = checkboxState.type
      .filter((t) => t.checkState)
      .map((t) => t.value);

    setFilteredProducts(
      productsList.filter((product) => {
        return (
          (color.length === 0 || color.includes(product.color)) &&
          (gender.length === 0 || gender.includes(product.gender)) &&
          (type.length === 0 || type.includes(product.type))
        );
      })
    );
  }, [checkboxState, productsList]);

  return { filteredProducts, checkboxState, setCheckboxState };
}

export default useFilterProducts;
