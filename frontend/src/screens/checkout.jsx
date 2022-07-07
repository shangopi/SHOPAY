import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Row } from "react-bootstrap";
import CheckoutForm from "../components/checkoutForm";

const Checkout = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryDays, setDeliveryDays] = useState(0);
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    let total = 0;
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      total += element.price * element.qty;
    }
    setTotalAmount(total);
  }, []);

  const handleDeliveryDays = (days) =>{
    setDeliveryDays(days)
  }

  const handleSubmit =(e) =>{
    console.log("submitted");
    // window.location("/orderstatus")
    // history.push('/orderstatus')
  }


  return (
    <div className="row">
      <div className="col-md-7">
        <h1>Details</h1>
        <CheckoutForm deliveryDays={deliveryDays} handleSubmit={handleSubmit} handleDeliveryDays={handleDeliveryDays}></CheckoutForm>
     
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
              <tr className="py-1" key={item.product}>
                <td className="p-1 text-center align-middle">
                  <img className="rounded img-fluid" src={item.image} alt="" />
                </td>
                <td className="py-1 align-middle">{item.name}</td>
                <td className="py-1 align-middle">{item.qty}</td>
                <td className="py-1 align-middle">{item.price}$</td>
                <td className="py-1 align-middle">{item.price * item.qty}$</td>
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
  );
};

export default Checkout;
