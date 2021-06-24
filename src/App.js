import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Component/Home'
import Cart from './Component/Cart'
import Checkout from './Component/Checkout'
import Product from './Component/Product'
class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/product" component={Product} />
        </Switch>
    );
  }
}

export default App;
