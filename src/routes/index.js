import {Route, Switch } from "react-router-dom";

import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Routes = () => {
  return (
   
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
  
  )
}

export default Routes;