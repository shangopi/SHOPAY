import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { RotateSpinner } from "react-spinners-kit";

const OrderStatus = ({ match }) => {
  const { state } = useLocation();
  const [showElement, setShowElement] = React.useState(true);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 500);
  }, []);

  // useEffect(() => {
  //   // console.log("order", state[1]);
  //   console.log(state[0].delivery_method === "pickup");
  // }, []);

  return (
    <>
      {showElement ? (
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
      ) : 1 === 1 ? (
        <div className="d-flex align-items-center justify-content-center">
          <Card className="col-md-8 col-lg-6 shadow-lg py-3">
            <FontAwesomeIcon color="green" icon={faCheckCircle} size="4x" />
            <h4 className="pt-3 text-center">
              Your Order is successfully placed
            </h4>
            <hr />
            <h4 className="text-center p-1">Order Summary</h4>
            <div>
              <div className="text-dark font-weight-bold text-uppercase ">
                Customer Details
              </div>
              <div className="row px-3 d-flex justify-content-between">
                <div>Name : </div>
                <div className="text-end font-weight-bold">
                  {state[0].first_name}
                </div>
              </div>
              <div className="row px-3 d-flex justify-content-between">
                <div>Mobile : </div>
                <div className="text-end font-weight-bold">
                  {state[0].telephone}
                </div>
              </div>
              <div className="row px-3 d-flex justify-content-between">
                <div>Email : </div>
                <div className="text-end font-weight-bold">
                  {state[0].email}
                </div>
              </div>
              <div className="row px-3 d-flex justify-content-between">
                <div>Pickup/Delivery : </div>
                <div className="text-end font-weight-bold">
                  {state[0].delivery_method}
                </div>
              </div>
              <div className="row px-3 d-flex justify-content-between">
                <div>Payment Method : </div>
                <div className="text-end font-weight-bold">
                  {state[0].payment_method === "COD"
                    ? `Cash on ${state[0].delivery_method}`
                    : "Online Payment"}
                </div>
              </div>
            </div>

            {!(state[0].delivery_method === "pickup") && (
              <div className="py-3">
                <div className="text-dark font-weight-bold text-uppercase ">
                  Address
                </div>
                <div className="row px-3 d-flex justify-content-between">
                  <div>Address : </div>
                  <div className="text-end font-weight-bold">
                    {state[0].address_line1 +
                      " , " +
                      state[0].address_line2 +
                      " , " +
                      state[0].address_line3}
                  </div>
                </div>
                <div className="row px-3 d-flex justify-content-between">
                  <div>City : </div>
                  <div className="text-end font-weight-bold">
                    {state[0].city}
                  </div>
                </div>
                <div className="row px-3 d-flex justify-content-between">
                  <div>District : </div>
                  <div className="text-end font-weight-bold">
                    {state[0].district}
                  </div>
                </div>
                <div className="row px-3 d-flex justify-content-between">
                  <div>Postal Code : </div>
                  <div className="text-end font-weight-bold">
                    {state[0].zip_code}
                  </div>
                </div>
                <div className="row px-3 d-flex justify-content-between">
                  <div>Estimated Delivery Days : </div>
                  <div className="text-end font-weight-bold">{state[2]}</div>
                </div>
              </div>
            )}
            <div className="py-2">
              <div className="text-dark font-weight-bold text-uppercase ">
                Items
              </div>
              {state[1].map((item) => (
                <div
                  className="row px-3 d-flex justify-content-between"
                  key={item.variant_id}
                >
                  <div>{item.name}</div>
                  <div className="text-end font-weight-bold">
                    {item.qty} x {item.price}$
                  </div>
                </div>
              ))}

              <hr />
              <div className="row px-3 d-flex justify-content-between">
                <div>Total : </div>
                <div className="text-end font-weight-bold">
                  {state[0].total}$
                </div>
              </div>
              <hr />
            </div>
            <h6 className="text-center">
              Thank you for your order...! Have a nice day...!
            </h6>
          </Card>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default OrderStatus;
