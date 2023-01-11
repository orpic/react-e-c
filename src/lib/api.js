const fetchUrl =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

export async function getProducts() {
  const response = await fetch(fetchUrl);

  console.log(response);

  return response;
}
