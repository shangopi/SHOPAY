import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
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

const App = () => {
  const [url, setURL] = useState("");

  useEffect (()=>{
    setURL(window.location.pathname)
    console.log(window.location.pathname);
  },[window.location.pathname])

  return (
    <Router>
      {window.location.pathname === "/login" && <Route path="/login" component={Login} exact />}
      
      {window.location.pathname !== "/login" && <Route path="/*" component={CustomerLanding} exact />}
      
    </Router>
  );
};

export default App;
