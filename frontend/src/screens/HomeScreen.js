import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
//import products from '../products'
import Axios from "axios";
import config from "../config/config.json";
import { useLocation } from "react-router-dom";

const HomeScreen = ({ products }) => {
  const { cust_id } = useLocation();

  useEffect(() => {
    // dispatch(addAuthDetails(cust_id));
    console.log(cust_id,products);

  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      {products.length === 0 && <h4 className="text-center py-3 bg-warning">No Products available based on your request</h4>}
      <Row>
        {products.map((product) => (
          <Col key={product.product_id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
