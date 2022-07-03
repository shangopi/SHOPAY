import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import SideBar from "../components/sidebar";
import HomeScreen from "./HomeScreen";
import ProductScreen from "./ProductScreen";
import CartScreen from "./CartScreen";
import Checkout from "./checkout";
import Footer from "../components/Footer";
import Axios from "axios";
import useGetAllProducts from "../hooks/useGetAllProducts";
import OrderStatus from "./orderStatus";

const CustomerLanding = () => {
  var screenSize = window.screen.width;
  const [mobileSidebarOpen, setOpenCloseMobileSidebar] = useState(false);
  const [pcSidebarOpen, setOpenClosePcSidebar] = useState(true);
  const [expandPcSidebar, setExpandSidebae] = useState(false);

  const openCloseMobileSidebar = () => {
    setOpenCloseMobileSidebar(!mobileSidebarOpen);
  };
  const openClosePcSidebar = () => {
    setOpenClosePcSidebar(!pcSidebarOpen);
  };
  const expandSidebar = () => {
    setExpandSidebae(!expandPcSidebar);
  };
  return (
    <div
      className={
        screenSize > 991
          ? pcSidebarOpen
            ? "main-wrapper"
            : expandPcSidebar
            ? "main-wrapper mini-sidebar expand-menu"
            : "main-wrapper mini-sidebar"
          : "main-wrapper"
      }
    >
      <Router>
        <Header
          mobileSidebarOpen={mobileSidebarOpen}
          pcSidebarOpen={pcSidebarOpen}
          openCloseMobileSidebar={openCloseMobileSidebar}
          openClosePcSidebar={openClosePcSidebar}
        />

        <SidebarContent
          mobileSidebarOpen={mobileSidebarOpen}
          pcSidebarOpen={pcSidebarOpen}
          sidebarOnExpand={expandPcSidebar}
          expandPcSidebarFunction={expandSidebar}
        />
        <Switch>
          <Route path="/" component={Profile} exact />
          <Route path="/users" component={UsersList} exact />
          <Route path="/user/:id" component={SaveUser} exact />
        </Switch>
      </Router>
    </div>
  );

  let products = useGetAllProducts();
  const [category, setCategory] = useState("");

  const handleCategory = (categoryId) => {
    setCategory(categoryId);
  };

  // function getFilteredList() {
  //   if (!category) {
  //     return products;
  //   }
  //   return products.filter((product) => product.category === selectedCategory);
  // }

  return (
    <div>
      <Header />
      <div className="row m-0">
        <div className="col-1">
          <SideBar handleCategory={handleCategory} />
        </div>
        <div className="col-10">
          <main className="py-3">
            <Container>
              <Route
                path="/"
                component={
                  products && (() => <HomeScreen products={products} />)
                }
                exact
              />

            </Container>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerLanding;
