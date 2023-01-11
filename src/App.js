import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { Cart, cartPath, Products, productsPath } from "./pages";

import { getProducts } from "./lib/api";
import { useEffect } from "react";
import useHttp from "./hooks/use-http";

import { useDispatch } from "react-redux";
import { productActions } from "./store/productSlice";

function App() {
  const dispatch = useDispatch();
  const {
    sendRequest,
    status,
    data: products,
    error,
  } = useHttp(getProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  // four states of our redux store for products - pending error empty success
  if (status === "pending") {
    dispatch(
      productActions.addProductsToStore({ products: [], status: "pending" })
    );
  }

  if (error) {
    //error return
    dispatch(
      productActions.addProductsToStore({ products: [], status: "error" })
    );
  }

  if (status === "completed" && (!products || products.length === 0)) {
    //status - no found
    dispatch(
      productActions.addProductsToStore({ products: [], status: "empty" })
    );
  }
  if (status === "completed" && products.length > 0) {
    dispatch(
      productActions.addProductsToStore({
        products: products,
        status: "success",
      })
    );
  }

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            {/* TODO correct it to product path */}
            <Redirect to={productsPath} />
          </Route>

          <Route path={productsPath} exact>
            <Products />
          </Route>

          <Route path={cartPath} exact>
            <Cart />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
