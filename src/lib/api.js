const fetchUrl =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

export async function getProducts() {
  const response = await fetch(fetchUrl);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  //   console.log(data);

  return data;
}
