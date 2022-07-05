import React from "react";
import { Container } from "react-bootstrap";
import { Route, Router } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartScreen from "./CartScreen";
import Checkout from "./checkout";
import HomeScreen from "./HomeScreen";
import OrderStatus from "./orderStatus";
import ProductScreen from "./ProductScreen";

const CustomerLanding = () => {
  return (
    <>
      <Header />

      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id/:title?" component={CartScreen} />
          <Route path="/cart" component={CartScreen} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orderstatus" component={OrderStatus} />
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default CustomerLanding;
