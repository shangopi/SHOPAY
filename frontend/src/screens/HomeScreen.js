import React, { useState,useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
//import products from '../products'
import Axios from 'axios'
import config from '../config/config.json';

const HomeScreen = () => {

  const [products,setProducts]=useState([]);

  useEffect(()=>{
    Axios.get(`${config.REACT_APP_API}product_page/getAllProducts`).then((response)=>{
      setProducts(response.data);
      //console.log(response.data)
    })
  },[])


  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.product_id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
