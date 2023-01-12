import { useEffect, useState } from "react";

function useSearchProducts(productsList) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);

  useEffect(() => {
    setSearchResults(
      productsList.filter((product) =>
        searchTerms.every(
          (term) =>
            product.name.toLowerCase().includes(term.toLowerCase()) ||
            product.color.toLowerCase().includes(term.toLowerCase()) ||
            product.type.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }, [searchTerms, productsList]);

  return { searchResults, setSearchTerms };
}

export default useSearchProducts;
