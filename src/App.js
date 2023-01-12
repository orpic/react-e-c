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

    return () => {};
  }, [sendRequest]);

  // console.log(status);
  // console.log(products);

  // four status for product store - / pending / error / empty / success /
  useEffect(() => {
    // console.log(status);
    // console.log(products);
    if (status === "pending") {
      dispatch(productActions.updateStatus("pending"));
    }

    if (error) {
      dispatch(productActions.updateStatus("error"));
    }

    if (status === "completed" && (!products || products.length === 0)) {
      dispatch(productActions.updateStatus("empty"));
    }
    if (status === "completed" && products && products.length > 0) {
      dispatch(productActions.addProductsToStore(products));
    }
    if (status === "completed") {
      dispatch(productActions.updateStatus("success"));
      // console.log("App.js Product cycle");
    }
    // re-run whenever status or products change
  }, [status, products, error, dispatch]);
  // dispatch(productActions.updateStatus("success"));
  // dispatch(productActions.addProductsToStore(products));

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
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
