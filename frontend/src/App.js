import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Accordion, Row } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Checkout from "./screens/checkout";
import OrderStatus from "./screens/orderStatus";
//import Axios from 'axios'


import Customer from "./components/admin/pages/orderReport.jsx";
import Quartly from "./components/admin/pages/salesReport";
import Analysis from "./components/admin/pages/analysis";
import Login from "./components/admin/pages/login";
import HeaderAdmin from "./components/admin/pages/header";

const App = () => {
  return (
    <Router>
      <Header />
      <HeaderAdmin />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orderstatus" component={OrderStatus} />


          <Route path="/login" component={Login}  />
          <Route path="/report" component={Quartly}/>
          <Route path="/customer" component={Customer}/>
          <Route path="/analysis" component={Analysis}/>
          
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
