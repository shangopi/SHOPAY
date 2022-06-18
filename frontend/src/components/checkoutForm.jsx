import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Button, Form, Row } from "react-bootstrap";

const CheckoutForm = () => {
  const districtList = [
    "Batticaloa",
    "Mannar",
    "Jaffna",
    "Kilinochchi",
    "Kandy",
    "Matale",
    "Nuwara Eliya",
    "Ampara",
    "Polonnaruwa",
    "Trincomalee",
    "Anuradhapura",
    "Vavuniya",
    "Mullaitivu",
    "Kurunegala",
    "Puttalam",
    "Ratnapura",
    "Galle",
    "Hambantota",
    "Matara",
    "Badulla",
    "Monaragala",
    "Kegalle",
    "Colombo",
    "Gampaha",
    "Kalutara",
  ];

  const [checked, setChecked] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");

  useEffect(() => {
  }, [checked, deliveryMethod]);

  const handleSubmit = (e) => {
    console.log(checked);
  };

  return (
    <Form>
      <Row>
        <Form.Group className="mb-3 col-md-6" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="shadow"
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="shadow"
            type="email"
            placeholder="Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            className="shadow"
            type="number"
            placeholder="Mobile"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicDistrict">
          <Form.Label>District</Form.Label>
          <Form.Control required className="shadow" as="select">
            <option value="">Select District</option>
            {districtList.map((district) => (
              <option value={district}>{district}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <h1 className="px-3">Delivery</h1>

        <Form.Group className="mb-3 col-md-12 mx-2" >
          <Form.Check
          required
            type="radio"
            name="group-2"
            id="default-radio-3"
            value="pickup"
            label="Store Pickup"
            onChange={(e) => setDeliveryMethod(e.currentTarget.value)}
          />

          <Form.Check
            type="radio"
            name="group-2"
            value="delivery"
            id="default-radio-4"
            label="Online Payment"
            onChange={(e) => setDeliveryMethod(e.currentTarget.value)}
          />
        </Form.Group>

        {deliveryMethod === "delivery" && (
          <Row className="px-3">
            <Form.Group className="mb-3 col-md-6" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formBasicZipCode">
              <Form.Label>ZipCode</Form.Label>
              <Form.Control type="number" placeholder="ZipCode" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-12" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
          </Row>
        )}

        <h1 className="px-3">Payment</h1>

        <Form.Group className="mb-3 col-md-12 mx-2">
          <Form.Check
            type="radio"
            name="group-1"
            id="default-radio-1"
            value="COD"
            label="Cash On Delivery"
            onChange={(e) => setChecked(e.currentTarget.value)}
          />

          <Form.Check
            type="radio"
            name="group-1"
            value="OP"
            id="default-radio-2"
            label="Online Payment"
            onChange={(e) => setChecked(e.currentTarget.value)}
          />
        </Form.Group>

        {checked === "OP" && (
          <Form className="mb-3 col ">
            <Row>
              <Form.Group
                className="mb-3 col-md-6"
                controlId="formBasicCardNum"
              >
                <Form.Label>Credit Card Number</Form.Label>
                <Form.Control type="text" placeholder="0000-0000-0000-0000" />
              </Form.Group>

              <Form.Group className="mb-3 col-md-2" controlId="formBasicMonth">
                <Form.Label>E.Month</Form.Label>
                <Form.Control type="text" placeholder="11" />
              </Form.Group>

              <Form.Group className="mb-3 col-md-2" controlId="formBasicYear">
                <Form.Label>E.Year</Form.Label>
                <Form.Control type="text" placeholder="2023" />
              </Form.Group>

              <Form.Group className="mb-3 col-md-2" controlId="formBasicCVC">
                <Form.Label>CVC</Form.Label>
                <Form.Control type="text" placeholder="676" />
              </Form.Group>
            </Row>
          </Form>
        )}
      </Row>

      <Row>
        <Button type="submit" className="mx-auto" onSubmit={handleSubmit()}>
          Checkout
        </Button>
      </Row>
    </Form>
  );
};

export default CheckoutForm;
