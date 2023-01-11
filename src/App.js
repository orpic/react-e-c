import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { Cart, cartPath, Products, productsPath } from "./pages";

// import { getProducts } from "./lib/api";
// import { useEffect } from "react";
// import useHttp from "./hooks/use-http";

// import { useDispatch } from "react-redux";
// import { productActions } from "./store/productSlice";

function App() {
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
