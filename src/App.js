import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { Cart, cartPath, Products, productsPath } from "./pages";

import { getProducts } from "./lib/api";
import { useEffect } from "react";
import { useHttp } from "./hooks";

import { useDispatch } from "react-redux";
import { productActions } from "./store/productSlice";

function App() {
  ////////////////////////////////////////////////////////////////////////
  // getting products data from
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

  ////////////////////////////////////////////////////////////////////////
  // four status for product store - / pending / error / empty / success /
  useEffect(() => {
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
      dispatch(productActions.updateStatus("success"));
    }
  }, [status, products, error, dispatch]);

  ////////////////////////////////////////////////////////////////////////

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
