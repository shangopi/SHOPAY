import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Button, Form, Row } from "react-bootstrap";
import axios from "axios";
import config from '../config/config.json';

const CheckoutForm = ({ handleDeliveryDays, handleSubmit }) => {
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
  const [deliveryMethod, setDeliveryMethod] = useState("pickup/delivery");
  const [district, setDistrict] = useState("Jaffna");
  const { cartItems } = useSelector((state) => state.cart);
  const { authDetails } = useSelector((state) => state.auth);
  const [userId, setUserId] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
  const state = {
    firstname: authDetails.first_name,
    lastname: authDetails.last_name,
    email: authDetails.email,
    phone: authDetails.telephone,
    delivery_method: "",
    payment_method: "",
    address_line1: authDetails.address_line1,
    address_line2: authDetails.address_line2,
    address_line3: authDetails.address_line3,
    city: authDetails.city,
    district: authDetails.district,
    zip_code: authDetails.zip_code,
    cart_item: { cartItems },
  };

  const orderNonUser = {};

  useEffect(() => {
    // console.log("auth", authDetails);
    // console.log("cart", cartItems);
  }, []);

  const handleDistrict = (e) => {
    e.preventDefault();
    setDistrict(e.target.value);
    if (e.target.value === "Colombo") {
      handleDeliveryDays(3);
    } else {
      handleDeliveryDays(5);
    }

    // console.log(e.target.value);
  };

  const handleSubmits = (e) => {
    e.preventDefault();
    // console.log(e.target.firstname.value);
    state.firstname = e.target.firstname.value;
    state.lastname = e.target.lastname.value;
    state.email = e.target.email.value;
    state.phone = e.target.phone.value;
    state.delivery_method = deliveryMethod;
    state.payment_method = checked;
    if (deliveryMethod !== "pickup") {
      state.address_line1 = e.target.address_line1.value;
      state.address_line2 = e.target.address_line2.value;
      state.city = e.target.city.value;
      state.district = district;
      state.zip_code = e.target.zip_code.value;
    }

    if (!isLogged) {
      orderNonUser.is_user = "No";
      orderNonUser.inp_name = e.target.firstname.value;
      orderNonUser.lastname = e.target.lastname.value;
      orderNonUser.email = e.target.email.value;
      orderNonUser.phone = e.target.phone.value;
      orderNonUser.delivery_method = deliveryMethod;
      orderNonUser.payment_method = checked;

      let variant_arr = "";
      let product_arr = "";
      let qty_arr = "";
      let price_arr = "";
      cartItems.map((item) => {
        variant_arr += String(item.variant) + ",";
        product_arr += String(item.product) + ",";
        qty_arr += String(item.qty) + ",";
        price_arr += String(item.price) + ",";
      });
      orderNonUser.variant_arr = variant_arr;
      orderNonUser.product_arr = product_arr;
      orderNonUser.qty_arr = qty_arr;
      orderNonUser.price_arr = price_arr;
      let total = 0;
      for (let index = 0; index < cartItems.length; index++) {
        const element = cartItems[index];
        total += element.price * element.qty;
      }
      orderNonUser.total = total;
      if (deliveryMethod !== "pickup") {
        orderNonUser.address_line1 = e.target.address_line1.value;
        orderNonUser.address_line2 = e.target.address_line2.value;
        orderNonUser.address_line3 = e.target.address_line3.value;
        orderNonUser.city = e.target.city.value;
        orderNonUser.district = district;
        orderNonUser.zip_code = e.target.zip_code.value;
      } else {
        orderNonUser.address_line1 = "";
        orderNonUser.address_line2 = "";
        orderNonUser.address_line3 = "";
        orderNonUser.city = "";
        orderNonUser.district = "";
        orderNonUser.zip_code = "";
      }
    }

    console.log("submitted..");
    console.log(deliveryMethod);
    console.log(state);
    console.log(orderNonUser);

    // let payload = {
    //   levelId: level,
    //   courseName: coursename,
    //   description: description,
    //   duration: duration,
    //   credit: credit,
    // };

    axios
      .post(`${config.REACT_APP_API}order/createOrderForNonUser`, orderNonUser, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => console.error(err));
    // console.log(state.cart_item);
  };

  return (
    <Form onSubmit={handleSubmits}>
      <Row>
        <Form.Group className="mb-3 col-md-6" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="shadow"
            type="text"
            // ref="firstname"
            name="firstname"
            placeholder="First Name"
            required
            defaultValue={state.firstname}
            onChange={(e) => (state.firstname = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="shadow"
            type="text"
            name="lastname"
            placeholder="Last Name"
            required
            defaultValue={state.lastname}
            onChange={(e) => (state.lastname = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="shadow"
            type="email"
            name="email"
            placeholder="Email"
            required
            defaultValue={state.email}
            onChange={(e) => (state.email = e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            className="shadow"
            type="number"
            name="phone"
            placeholder="Mobile"
            required
            defaultValue={state.phone}
            onChange={(e) => (state.phone = e.target.value)}
          />
        </Form.Group>

        <h1 className="px-3">Delivery</h1>

        <Form.Group className="mb-3 col-md-12 mx-2">
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
            label="Delivery"
            onChange={(e) => setDeliveryMethod(e.currentTarget.value)}
          />
        </Form.Group>

        {deliveryMethod === "delivery" && (
          <Row className="px-3">
            <Form.Group className="mb-3 col-md-12" controlId="formBasicAddress">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                name="address_line1"
                placeholder="Address Line 1"
                required
                defaultValue={state.address_line1}
                onChange={(e) => (state.address_line1 = e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-12" controlId="formBasicAddress">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                name="address_line2"
                placeholder="Address Line 2"
                required
                defaultValue={state.address_line2}
                onChange={(e) => (state.address_line2 = e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-12" controlId="formBasicAddress">
              <Form.Label>Address Line 3</Form.Label>
              <Form.Control
                type="text"
                name="address_line3"
                placeholder="Address Line 3"
                required
                defaultValue={state.address_line3}
                onChange={(e) => (state.address_line3 = e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                defaultValue={state.city}
                onChange={(e) => (state.city = e.target.value)}
                placeholder="City"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="formBasicDistrict">
              <Form.Label>District</Form.Label>
              <Form.Control
                required
                className=""
                as="select"
                onChange={handleDistrict}

                // onChange={(e)=>state.district=e.target.value}
              >
                <option value={district}>{district}</option>
                {districtList.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="formBasicZipCode">
              <Form.Label>ZipCode</Form.Label>
              <Form.Control
                type="number"
                name="zip_code"
                defaultValue={state.zip_code}
                onChange={(e) => (state.zip_code = e.target.value)}
                placeholder="ZipCode"
              />
            </Form.Group>
          </Row>
        )}

        <h1 className="px-3">Payment</h1>

        <Form.Group className="mb-3 col-md-12 mx-2">
          <Form.Check
            required
            type="radio"
            name="group-1"
            id="default-radio-1"
            value="COD"
            label={`Cash on ${deliveryMethod}`}
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
          // <Form className="mb-3 col ">
          <Row>
            <Form.Group className="mb-3 col-md-6" controlId="formBasicCardNum">
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
          // </Form>
        )}
      </Row>

      <Row>
        <Button type="submit" className="mx-auto">
          Checkout
        </Button>
      </Row>
    </Form>
  );
};

export default CheckoutForm;
