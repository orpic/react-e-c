import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { useProductFetch } from "./hooks";
import { Cart, cartPath, Products, productsPath } from "./pages";

function App() {
  useProductFetch();

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to={productsPath} />
          </Route>

          <Route path={productsPath}>
            <Products />
          </Route>

          <Route path={cartPath}>
            <Cart />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
