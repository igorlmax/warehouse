import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact";
import Products from "./components/products/Products";
import ProductDetail from "./components/products/ProductDetail";
import PageNotFound from "./components/PageNotFound";
import React from "react";
import Logs from "./components/logs/Logs";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} />
        <Route path="/logs" component={Logs} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route comonent={PageNotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
