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
    const price = checkboxState.price
      .filter((t) => t.checkState)
      .map((t) => t.value);

    setFilteredProducts(
      productsList.filter((product) => {
        return (
          (color.length === 0 || color.includes(product.color.toLowerCase())) &&
          (gender.length === 0 ||
            gender.includes(product.gender.toLowerCase())) &&
          (type.length === 0 || type.includes(product.type.toLowerCase())) &&
          (price.length === 0 ||
            (price.includes("0 - Rs250") &&
              product.price >= 0 &&
              product.price <= 250) ||
            (price.includes("Rs251 - Rs450") &&
              product.price > 250 &&
              product.price <= 450) ||
            (price.includes("Above Rs450") && product.price > 450))
        );
      })
    );
  }, [checkboxState, productsList]);

  return { filteredProducts, setCheckboxState };
}

export default useFilterProducts;
