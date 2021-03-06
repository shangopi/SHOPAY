import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Row } from "react-bootstrap";
import axios from "axios";

import { districtList } from "../constants/districts";
import { toast } from "react-toastify";

const CheckoutForm = ({ handleDeliveryDays, handleSubmit }) => {
  const [checked, setChecked] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("pickup/delivery");
  const [district, setDistrict] = useState("Jaffna");
  const { cartItems } = useSelector((state) => state.cart);
  const { authDetails } = useSelector((state) => state.auth);
  const [isLogged, setIsLogged] = useState(localStorage.getItem("authDetails"));
  const state = {
    user_id: authDetails.cust_id,
    delivery_method: "",
    payment_method: "",
    address_line1: authDetails.address_line1,
    address_line2: authDetails.address_line2,
    address_line3: authDetails.address_line3,
    city: authDetails.city,
    district: authDetails.district,
    zip_code: authDetails.zip_code,
  };
  const cardDetails = { cardNo: "", month: "", year: "", cvc: "" };

  const orderNonUser = {};

  useEffect(() => {
    // console.log("auth", authDetails);
    // console.log("cart", cartItems);
    console.log(cardDetails);
  }, [cardDetails]);

  const handleDistrict = (e) => {
    e.preventDefault();
    setDistrict(e.target.value);
    if (e.target.value === "Colombo") {
      handleDeliveryDays(3);
    } else {
      handleDeliveryDays(5);
    }
  };

  const checkCardDetails = () => {
    if (checked === "OP") {
      console.log("card", cardDetails);
      if (
        parseInt(cardDetails.cardNo.length) === 16 &&
        1 <= parseInt(cardDetails.month) && parseInt(cardDetails.month)  <= 12 &&
        2022 <= parseInt(cardDetails.year) && parseInt(cardDetails.year)  <= 2030 &&
        parseInt(cardDetails.cvc.length) === 3
      ) {
        return true;
      }
      return false;
    }else{
      return true;
    }

  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    if (checkCardDetails()) {
      let variant_arr = "";
      let product_arr = "";
      let quantity_arr = "";
      let price_arr = "";
      cartItems.map((item) => {
        variant_arr += String(item.variant) + ",";
        product_arr += String(item.product) + ",";
        quantity_arr += String(item.qty) + ",";
        price_arr += String(item.price) + ",";
      });

      let total = 0;
      for (let index = 0; index < cartItems.length; index++) {
        const element = cartItems[index];
        total += element.price * element.qty;
      }

      let url = "";

      if (!isLogged) {
        url = "createOrderForNonUser";
        // handleUrl("createOrderForNonUser")
        orderNonUser.is_user = "No";
        orderNonUser.inp_name = e.target.firstname.value;
        orderNonUser.lastname = e.target.lastname.value;
        orderNonUser.email = e.target.email.value;
        orderNonUser.phone = e.target.phone.value;
        orderNonUser.delivery_method = deliveryMethod;
        orderNonUser.payment_method = checked;
        orderNonUser.variant_arr = variant_arr;
        orderNonUser.product_arr = product_arr;
        orderNonUser.quantity_arr = quantity_arr;
        orderNonUser.price_arr = price_arr;
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
      } else {
        url = "createOrderForUser";
        // handleUrl("createOrderForUser")
        state.delivery_method = deliveryMethod;
        state.payment_method = checked;
        state.is_user = "Yes";
        state.user_id = authDetails.cust_id;
        state.first_name = authDetails.first_name;
        state.variant_arr = variant_arr;
        state.product_arr = product_arr;
        state.quantity_arr = quantity_arr;
        state.price_arr = price_arr;
        state.total = total;
        state.telephone = authDetails.telephone;
        state.email = authDetails.email;

        if (deliveryMethod !== "pickup") {
          state.address_line1 = e.target.address_line1.value;
          state.address_line2 = e.target.address_line2.value;
          state.address_line3 = e.target.address_line3.value;
          state.city = e.target.city.value;
          state.district = district;
          state.zip_code = e.target.zip_code.value;
        } else {
        }
      }

      console.log("submitted..");
      console.log("state", state);
      console.log("nonuser", orderNonUser);

      let payload = [];
      if (isLogged) {
        payload = state;
        // setPayload(state)
      } else {
        // setPayload(orderNonUser)
        payload = orderNonUser;
      }

      await handleSubmit(url, payload);
    } else {
      toast.error("Enter Valid Card Details", {
        toastId:"1",
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmits}>
      <Row>
        <Form.Group className="mb-3 col-md-6" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="shadow"
            type="text"
            name="firstname"
            placeholder="First Name"
            disabled={isLogged}
            required
            defaultValue={authDetails.first_name}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="shadow"
            type="text"
            name="lastname"
            placeholder="Last Name"
            disabled={isLogged}
            required
            defaultValue={authDetails.last_name}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="shadow"
            type="email"
            name="email"
            placeholder="Email"
            disabled={isLogged}
            required
            defaultValue={authDetails.email}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-6" controlId="formBasicMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            className="shadow"
            type="number"
            name="phone"
            placeholder="Mobile"
            disabled={isLogged}
            required
            defaultValue={authDetails.telephone}
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
          <Row>
            <Form.Group className="mb-3 col-md-6" controlId="formBasicCardNum">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="0000 0000 0000 0000"
                required
                defaultValue={cardDetails.cardNo}
                onChange={(e) => (cardDetails.cardNo = e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-2" controlId="formBasicMonth">
              <Form.Label>E.Month</Form.Label>
              <Form.Control
                type="number"
                placeholder="11"
                required
                defaultValue={cardDetails.month}
                onChange={(e) => (cardDetails.month = e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-2" controlId="formBasicYear">
              <Form.Label>E.Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="2023"
                required
                defaultValue={cardDetails.year}
                onChange={(e) => (cardDetails.year = e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-2" controlId="formBasicCVC">
              <Form.Label>CVC</Form.Label>
              <Form.Control
                type="number"
                placeholder="676"
                required
                defaultValue={cardDetails.cvc}
                onChange={(e) => (cardDetails.cvc = e.target.value)}
              />
            </Form.Group>
          </Row>
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
