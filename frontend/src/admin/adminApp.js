import React, { Component } from "react";
// import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// import Header from './components/Header'
// import Footer from './components/Footer'

import AddProduct from "./addProduct";
import ViewProduct from "./viewProduct";
import ViewCatecory from "./viewCatecory";
import AddCatecory from "./addCategory";
import AdminHome from "./adminHome";
import Navbar from "./navbar";

class AdminApp extends Component {
  state = {};
  render() {
    return (
      <Router>
             <Navbar> </Navbar>
          <Route path='/admin/dashboard' component={AdminHome} exact />
          <Route path="/admin/addproduct" component={AddProduct} exact />
          <Route path="/admin/viewproduct" component={ViewProduct} exact />
          <Route path="/admin/addcategory" component={AddCatecory} exact />
          <Route path="/admin/viewcategory" component={ViewCatecory} exact />
      </Router>
    );
  }
}

export default AdminApp;
