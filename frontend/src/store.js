import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";

const reducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const authDetailsFromStorage = localStorage.getItem("authDetails")
  ? JSON.parse(localStorage.getItem("authDetails"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  auth: { authDetails: authDetailsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
