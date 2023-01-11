import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { Cart, cartPath, Products, productsPath } from "./pages";

function App() {
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
