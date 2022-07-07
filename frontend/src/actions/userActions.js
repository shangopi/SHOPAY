import axios from "axios";
import React, { useState, useEffect } from 'react'
import { ADD_AUTH_DETAILS } from "../constants/authConstant";
import config from "../config/config.json";



export const addAuthDetails = (cus_id) => async (dispatch) => {
  //TODO: get data from db by using id
  
//   const {data}  = await axios.get(`${config.REACT_APP_API}variant/getVarientByID`, { params: { id: id } });
  
  //console.log(data[0].title);
  const data = {
    cus_id : cus_id,
    first_name: "Abii",
    last_name: "Raja",
    email: "abinesht12@gmail.com",
    telephone: "07777777",
    address_line1: "Anaipanthy",
    address_line2: "Alvai East",
    address_line3: "Alvai",
    city: "Nelliady",
    district: "Jaffna",
    zip_code: "40000",
  };

  dispatch({
    type: ADD_AUTH_DETAILS,
    payload: {
      cus_id: data.cus_id,
      first_name:  data.first_name,
      last_name:  data.last_name,
      telephone:  data.telephone,
      email: data.email,
      address_line1:  data.address_line1,
      address_line2:  data.address_line2,
      address_line3:  data.address_line3,
      city: data.city,
      district :  data.district,
      zip_code :  data.zip_code
    },
  });

  localStorage.setItem("authDetails", JSON.stringify(data));
};

// export const removeFromCart = (id) => (dispatch, getState) => {
//   dispatch({
//     type: CART_REMOVE_ITEM,
//     payload: id,
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };
