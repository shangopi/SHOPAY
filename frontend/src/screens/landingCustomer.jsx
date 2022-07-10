import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import { RotateSpinner } from "react-spinners-kit";
import Footer from "../components/Footer";
import Header from "../components/Header";
import config from "../config/config.json";
import CartScreen from "./CartScreen";
import Checkout from "./checkout";
import HomeScreen from "./HomeScreen";
import Login from "./login";
import Logout from "./logout";
import OrderStatus from "./orderStatus";
import ProductScreen from "./ProductScreen";
import SignUp from "./signup";

const CustomerLanding = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loader, setloader] = React.useState(false);

  useEffect(() => {
    axios
      .get(`${config.REACT_APP_API}product_page/getAllProducts`)
      .then((response) => {
        setProducts(response.data);
        setAllProducts(response.data);
        setloader(true);
      });
  }, []);


  return (
    <>
      {!loader ? (
        <div
          className="h-100 d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <RotateSpinner size={50} color="#5A2675" loading={true} />
        </div>
      ) : (
        <div>
          {window.location.pathname !== "/login" &&
            window.location.pathname !== "/signup" && (
              <Header allProducts={allProducts} setProducts={setProducts} />
            )}
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={SignUp} exact />

          {window.location.pathname !== "/login" &&
            window.location.pathname !== "/signup" && (
              <main className="py-3">
                <Container>
                <Route
                    path="/"
                    exact
                    component={() => <HomeScreen products={products} />}
                  />
                  <Route path="/product/:id" component={ProductScreen} />
                  <Route
                    path="/cart/:variant_id/:product_id/:title?"
                    component={CartScreen}
                  />
                  <Route path="/cart" component={CartScreen} exact />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/orderstatus" component={OrderStatus} />
                  <Route path="/logout" component={Logout} />
                  {/* <Route path="/notfound" component={PageNotFound} /> */}

                </Container>
              </main>
            )}

          {window.location.pathname !== "/login" && <Footer />}
        </div>
      )}
    </>
  );
};

export default CustomerLanding;
