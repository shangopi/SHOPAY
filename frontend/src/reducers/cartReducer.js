import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find((x) => x.variant === item.variant)

      /*TODO need to check for existing item*/

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.variant === existItem.variant ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.variant !== action.payload),
      }
    default:
      return state
  }
}