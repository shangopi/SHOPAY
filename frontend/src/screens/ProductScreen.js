import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import axios from "axios";
import config from "../config/config.json";

const ProductScreen = ({ history, match }) => {
  const [product, setProduct] = useState({});
  const [variants, setVariants] = useState([]);
  const [types, setTypes] = useState([]);
  const [values, setValues] = useState([]);
  const [custom_attribute, setAttributeList] = useState([]);
  const [currentVariant, setCurrentVariant] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.REACT_APP_API}product_page/getProductByID`, {
        params: { id: match.params.id },
      })
      .then((response) => {
        setProduct(response.data);
        if (response.data.customAttribute) {
          setAttributeList(response.data.customAttribute);
        }
       


        axios
          .get(`${config.REACT_APP_API}variant/getVarientByID`, {
            params: { id: response.data.default_var_id },
          })
          .then((response2) => {
            setCurrentVariant(response2.data[0]);
            // console.log(response2.data[0]);
          });
      });
  }, [match]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        `${config.REACT_APP_API}variant/getAllVarientsFullInfo?id=${match.params.id}`
      );

      setVariants(response.data);
      setTypes(response.data[0].key);
      setValues(response.data[0].value);
    }

    fetchMyAPI();
  }, []);

  const handleVariant = (variant) => {
    setCurrentVariant(variant);
    console.log(variant);
    setValues(variant.value);
  };

  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    history.push(`/cart/${currentVariant.variant_id}/${product.product_id}/${product.title} ${values.map((type) => ` ${type}  `)}?qty=${qty}`);
  };

  return (
    <>
      <Link className="btn btn-light my-1" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={currentVariant.image} alt={product.title} width="550px" fluid />

          <p className="my-3">Description: {product.description}</p>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item className="py-0">
              <h3 className="py-0 ">{product.title} {values.map((type) => `- ${type}  `)}</h3>
            </ListGroup.Item>

            <ListGroup.Item >Brand : {product.brand}</ListGroup.Item>

            <ListGroup.Item>SKU:{product.sku}</ListGroup.Item>

            <ListGroup.Item>Weight :{product.weight}g</ListGroup.Item>

            {custom_attribute.length !==0 && custom_attribute.map((attribute) => (
              <ListGroup.Item key={attribute.attribute_id}>
                {attribute.name}:{attribute.value}
              </ListGroup.Item>
            ))}

            {variants.length !== 1 &&
              variants.map((variant) => (
                <Button
                  key={variant.variant_id}
                  variant="outline-dark"
                  className="my-1 "
                  onClick={() =>
                    handleVariant(
                      variant
                    )
                  }
                >
                  {variant.value.map((type) => `${type} - `)}
                </Button>
              ))}

            <ListGroup.Item className="my-5 bg-dark variant-dark">
              <h2 className="text-center text-white m-0">Price: ${currentVariant.price}</h2>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              {types.map((type,index) => (
                <ListGroup.Item key={types[index]}>
                  <Row>
                    <Col>{types[index]}:</Col>
                    <Col>
                      <strong>{values[index]}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}

              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${currentVariant.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{currentVariant.count > 0 ? "In Stock" : "Out Of Stock"}</Col>
                </Row>
              </ListGroup.Item>

              {currentVariant.count > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(10).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block"
                  type="button"
                  disabled={currentVariant.count=== 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
