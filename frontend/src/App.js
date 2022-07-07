import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Container, Accordion, Row } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Checkout from "./screens/checkout";
import OrderStatus from "./screens/orderStatus";
import Login from "./screens/login";
import CustomerLanding from "./screens/landingCustomer";
//import Axios from 'axios'

import Customer from "./components/admin/pages/orderReport.jsx";
import Quartly from "./components/admin/pages/salesReport";
import Analysis from "./components/admin/pages/analysis";
import HeaderAdmin from "./components/admin/pages/header";
import AdminLanding from "./screens/landingAdmin";
import SignUp from "./screens/signup";

const App = () => {
  const [url, setURL] = useState("");

  useEffect(() => {
    setURL(window.location.pathname);
  }, [window.location.pathname]);

  //  return (
  //   <Router>
  //    <Header />
  //      <HeaderAdmin />
  //      <main className="py-3">
  //        <Container>
  //          <Route path="/" component={HomeScreen} exact />
  //          <Route path="/product/:id" component={ProductScreen} />
  //          <Route path="/cart/:id?" component={CartScreen} />
  //          <Route path="/checkout" component={Checkout} />
  //          <Route path="/orderstatus" component={OrderStatus} />

  //          <Route path="/login" component={Login}  />
  //          <Route path="/report" component={Quartly}/>
  //          <Route path="/customer" component={Customer}/>
  //          <Route path="/analysis" component={Analysis}/>

  //        </Container>
  //      </main>

  return (
    <Router>
      {window.location.pathname === "/login" && (
        <Route path="/login" component={Login} exact />
      )}

      {window.location.pathname === "/signup" && (
        <Route path="/signup" component={SignUp} exact />
      )}

      {(window.location.pathname !== "/login" && window.location.pathname !== "/signup" ) && (
        <Switch>
          <Route path="/Admin/*" component={AdminLanding} exact />
          <Redirect path="/Admin" to="/Admin/analysis" />
          <Route path="/*" component={CustomerLanding} exact />
        </Switch>
      )}
    </Router>
  );
};

export default App;
