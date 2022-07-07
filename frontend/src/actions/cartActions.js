import axios from "axios";
import React, { useState, useEffect } from 'react'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import config from "../config/config.json";



export const addToCart = (id,title, qty) => async (dispatch, getState) => {
  //TODO: get data from db by using id
  
  const {data}  = await axios.get(`${config.REACT_APP_API}variant/getVarientByID`, { params: { id: id } });
  
  //console.log(data[0].title);
  

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      variant: data[0].variant_id,
      name: title,
      image: data[0].image,
      price: data[0].price,
      countInStock: data[0].count,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
