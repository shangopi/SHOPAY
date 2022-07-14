import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CheckoutForm from "../components/checkoutForm";
import config from "../config/config.json";

const Checkout = ({ history, match }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryDays, setDeliveryDays] = useState(0);
  const dispatch = useDispatch();
  const [outOfStock, setOutOfStock] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { authDetails } = useSelector((state) => state.auth);
  const [cart_dup, setCart_dup] = useState();

  useEffect(() => {
    handleDeliveryDays(authDetails.district === "Colombo" ? 3 : 5);
    let total = 0;
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      total += element.price * element.qty;
    }
    setTotalAmount(total);
  }, []);

  const handleDeliveryDays = (days) => {
    setDeliveryDays(days);
    cartItems.map((item) => {
      if (item.countInStock <= item.qty) {
        setDeliveryDays(days + 3);
        setOutOfStock(true);
      }
    });
  };

  const handleSubmit = (url, payload) => {
    axios
      .post(`${config.REACT_APP_API}order/${url}`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("success");
        setCart_dup(cartItems);
        localStorage.removeItem("cartItems");

        history.replace({
          pathname: "/orderStatus",
          state: [payload, cartItems, deliveryDays],
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {cartItems.length !== 0 ? (
        <div className="row">
          <div className="col-md-7">
            <h1>Details</h1>
            <CheckoutForm
              deliveryDays={deliveryDays}
              handleSubmit={handleSubmit}
              handleDeliveryDays={handleDeliveryDays}
            ></CheckoutForm>
          </div>
          <div className="col-md-5 p-1">
            <h1 className="px-3">Cart</h1>
            <table className="table">
              <thead>
                <tr className="py-1 ">
                  <th scope="col" className="py-1 align-middle">
                    #
                  </th>
                  <th scope="col" className="py-1 align-middle">
                    Product
                  </th>
                  <th scope="col" className="py-1 align-middle">
                    Qty
                  </th>
                  <th scope="col" className="py-1 align-middle">
                    Price
                  </th>
                  <th scope="col" className="py-1 align-middle">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="py-1" key={item.variant}>
                    <td className="p-1 text-center align-middle">
                      <img
                        className="rounded img-fluid"
                        src={item.image}
                        alt=""
                      />
                    </td>
                    <td className="py-1 align-middle">{item.name}</td>
                    <td className="py-1 align-middle">{item.qty}</td>
                    <td className="py-1 align-middle">{item.price}$</td>
                    <td className="py-1 align-middle">
                      {item.price * item.qty}$
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5" className="table-active justify-content-end">
                    <div
                      style={{ textAlign: "right", fontWeight: "bold" }}
                      className="fw-bold"
                    >
                      Total : {totalAmount}$
                    </div>
                    {outOfStock && (
                      <div
                        style={{ textAlign: "right", fontWeight: "bold" }}
                        className="fw-bold text-danger"
                      >
                        Out Of Stock So Additional 3 days
                      </div>
                    )}
                    {deliveryDays !== 0 && (
                      <div
                        style={{ textAlign: "right", fontWeight: "bold" }}
                        className="fw-bold"
                      >
                        Estimated Delivery Days: {deliveryDays}
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Checkout;
