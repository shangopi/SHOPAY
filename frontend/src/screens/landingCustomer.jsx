import React, { useEffect } from "react";
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

const CustomerLanding = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(addAuthDetails("1"))
  }, [dispatch])


  return (
    <>
      {window.location.pathname !== "/login" && window.location.pathname !== "/signup" && <Header />}
      <Route path="/login" component={Login} exact />
      <Route path="/signup" component={SignUp} exact />

      {window.location.pathname !== "/login" && window.location.pathname !== "/signup" && (
        <main className="py-3">
          <Container>
            
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id/:title?" component={CartScreen} />
            <Route path="/cart" component={CartScreen} exact />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orderstatus" component={OrderStatus} />
            {/* <Route path="/notfound" component={PageNotFound} /> */}
            <Route path="/" exact  component={HomeScreen} />
            

          </Container>
        </main>
      )}

      {window.location.pathname !== "/login" && <Footer />}
    </>
  );
};

export default CustomerLanding;
