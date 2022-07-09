import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OrderStatus = ({ match }) => {
  const {state} = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Card className="col-md-8 col-lg-6 shadow-lg py-3">
        <FontAwesomeIcon color="green" icon={faCheckCircle} size="4x" />
        <h4 className="pt-3 text-center">Your Order is successfully placed</h4>
        <hr />
        <h4 className="text-center p-1">Order Summary</h4>
        <div>
          <div className="text-dark font-weight-bold text-uppercase ">
            Customer Details
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Name : </div>
            <div className="text-end font-weight-bold">Abinesh</div>
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Mobile : </div>
            <div className="text-end font-weight-bold">0768432752</div>
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Email : </div>
            <div className="text-end font-weight-bold">
              abinesht12@gmail.com
            </div>
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Pickup/Delivery : </div>
            <div className="text-end font-weight-bold">Delivery</div>
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Payment Method : </div>
            <div className="text-end font-weight-bold">Online Transfer</div>
          </div>
        </div>

        <div className="py-3">
          <div className="text-dark font-weight-bold text-uppercase ">
            Address
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Address : </div>
            <div className="text-end font-weight-bold">
              Anaipanthy, Alvai East
            </div>
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>City : </div>
            <div className="text-end font-weight-bold">Nelliady</div>
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>District : </div>
            <div className="text-end font-weight-bold">Jaffna</div>
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Postal Code : </div>
            <div className="text-end font-weight-bold">40000</div>
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Estimated Delivery Days : </div>
            <div className="text-end font-weight-bold">3 days</div>
          </div>
        </div>

        <div className="py-1">
          <div className="text-dark font-weight-bold text-uppercase ">
            Items
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Iphone 11 Pro 64gb : </div>
            <div className="text-end font-weight-bold">2 x 500$</div>
          </div>
          <div className="row px-3 d-flex justify-content-between">
            <div>Sony Speaker : </div>
            <div className="text-end font-weight-bold">1 x 400$</div>
          </div>
          <hr />
          <div className="row px-3 d-flex justify-content-between">
            <div>Total : </div>
            <div className="text-end font-weight-bold">1400$</div>
          </div>
          <hr />
        </div>
        <h6 className="text-center">
          Thank you for your order...! Have a nice day...!
        </h6>
      </Card>
    </div>
  );
};

export default OrderStatus;
