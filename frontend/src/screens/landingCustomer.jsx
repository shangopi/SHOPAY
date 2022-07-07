import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Redirect, Route, Router } from "react-router-dom";
import { addAuthDetails } from "../actions/userActions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartScreen from "./CartScreen";
import Checkout from "./checkout";
import HomeScreen from "./HomeScreen";
import Login from "./login";
import PageNotFound from "./notfound";
import OrderStatus from "./orderStatus";
import ProductScreen from "./ProductScreen";
import SignUp from "./signup";
import config from '../config/config.json';

const CustomerLanding = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${config.REACT_APP_API}product_page/getAllProducts`).then(
      (response) => {
        setProducts(response.data);
        console.log(response.data)
      }
    );
  }, []);

  useEffect(() => {
    dispatch(addAuthDetails("1"));
  }, [dispatch]);

  return (
    <>
      {window.location.pathname !== "/login" &&
        window.location.pathname !== "/signup" && <Header products={products} setProducts={setProducts} />}
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={SignUp} exact />

      {window.location.pathname !== "/login" &&
        window.location.pathname !== "/signup" && (
          <main className="py-3">
            <Container>
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id/:title?" component={CartScreen} />
              <Route path="/cart" component={CartScreen} exact />
              <Route path="/checkout" component={Checkout} />
              <Route path="/orderstatus" component={OrderStatus} />
              {/* <Route path="/notfound" component={PageNotFound} /> */}
              <Route path="/" exact component={() => (<HomeScreen products={products} />)} />
            </Container>
          </main>
        )}

      {window.location.pathname !== "/login" && <Footer />}
    </>
  );
};

export default CustomerLanding;
