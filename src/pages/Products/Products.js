import React from "react";
import classes from "./Products.module.css";
import { FilterSection, ProductArea, SearchBar } from "../../components";

import { useEffect } from "react";
import { getProducts } from "../../lib/api";
import useHttp from "../../hooks/use-http";

const Products = () => {
  // const {
  //   sendRequest,
  //   status,
  //   data: products,
  //   error,
  // } = useHttp(getProducts, true);

  // useEffect(() => {
  //   sendRequest();
  // }, [sendRequest]);

  const productsList = [
    {
      id: 1,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Black Polo",
      type: "Polo",
      price: 250,
      currency: "INR",
      color: "Black",
      gender: "Men",
      quantity: 3,
    },
    {
      id: 2,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Blue Polo",
      type: "Polo",
      price: 350,
      currency: "INR",
      color: "Blue",
      gender: "Women",
      quantity: 3,
    },
    {
      id: 3,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Pink Polo",
      type: "Polo",
      price: 350,
      currency: "INR",
      color: "Pink",
      gender: "Women",
      quantity: 6,
    },
    {
      id: 4,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Black Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Black",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 5,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Green Polo",
      type: "Polo",
      price: 250,
      currency: "INR",
      color: "Green",
      gender: "Men",
      quantity: 1,
    },
    {
      id: 6,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Green Polo",
      type: "Polo",
      price: 350,
      currency: "INR",
      color: "Green",
      gender: "Women",
      quantity: 1,
    },
    {
      id: 7,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Blue Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Blue",
      gender: "Women",
      quantity: 2,
    },
    {
      id: 8,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Black Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Black",
      gender: "Women",
      quantity: 5,
    },
    {
      id: 9,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Blue Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Blue",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 10,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Red Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Red",
      gender: "Women",
      quantity: 2,
    },
    {
      id: 11,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Grey Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Grey",
      gender: "Men",
      quantity: 1,
    },
    {
      id: 12,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Purple Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Purple",
      gender: "Women",
      quantity: 3,
    },
    {
      id: 13,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Grey Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Grey",
      gender: "Women",
      quantity: 1,
    },
    {
      id: 14,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "White Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "White",
      gender: "Women",
      quantity: 0,
    },
    {
      id: 15,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Black Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Black",
      gender: "Men",
      quantity: 7,
    },
    {
      id: 16,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Purple Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Purple",
      gender: "Men",
      quantity: 1,
    },
    {
      id: 17,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "White Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "White",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 18,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Blue Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Blue",
      gender: "Women",
      quantity: 3,
    },
    {
      id: 19,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Yellow Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Yellow",
      gender: "Women",
      quantity: 1,
    },
    {
      id: 20,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "White Polo",
      type: "Polo",
      price: 350,
      currency: "INR",
      color: "White",
      gender: "Women",
      quantity: 4,
    },
    {
      id: 21,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Red Polo",
      type: "Polo",
      price: 250,
      currency: "INR",
      color: "Red",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 22,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Blue Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Blue",
      gender: "Men",
      quantity: 0,
    },
    {
      id: 23,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Grey Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Grey",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 24,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Grey Polo",
      type: "Polo",
      price: 300,
      currency: "INR",
      color: "Grey",
      gender: "Men",
      quantity: 3,
    },
    {
      id: 25,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Red Hoodie",
      type: "Hoodie",
      price: 300,
      currency: "INR",
      color: "Red",
      gender: "Men",
      quantity: 0,
    },
    {
      id: 26,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "White Polo",
      type: "Polo",
      price: 300,
      currency: "INR",
      color: "White",
      gender: "Men",
      quantity: 1,
    },
    {
      id: 27,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "White Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "White",
      gender: "Women",
      quantity: 3,
    },
    {
      id: 28,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Grey Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Grey",
      gender: "Men",
      quantity: 0,
    },
    {
      id: 29,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Black Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Black",
      gender: "Women",
      quantity: 0,
    },
    {
      id: 30,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Black Polo",
      type: "Polo",
      price: 300,
      currency: "INR",
      color: "Black",
      gender: "Women",
      quantity: 4,
    },
  ];
  const searchText = ["polo", "green"];
  const searchProducts = (productsList, searchText) => {
    return productsList.filter((product) =>
      searchText.every(
        (text) =>
          product.name.toLowerCase().includes(text.toLowerCase()) ||
          product.color.toLowerCase().includes(text.toLowerCase()) ||
          product.type.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const searchResult = searchProducts(productsList, searchText);
  console.log(searchResult);

  // const filterProducts = products.filter((item) => {
  // item.type.toLowerCase().includes(searchText.toLowerCase());
  // });
  // console.log(filterProducts);
  // const searchingFunction = () => {};

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
          {/* <ProductArea stats={status} products={products} error={error} /> */}
        </div>
      </main>
    </>
  );
};

export const productsPath = "/products";
export default Products;
