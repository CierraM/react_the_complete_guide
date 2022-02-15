import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import ProductDetail from "./pages/ProductDetail";

import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/* Switch: only one route will be rendered at once */}
        <Switch>
          <Route path='/' exact>
            <Redirect to="/welcome"/>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
