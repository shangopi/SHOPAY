import { ADD_AUTH_DETAILS } from '../constants/authConstant'

export const authReducer = (state = { authDetails: [] }, action) => {
  switch (action.type) {
    case ADD_AUTH_DETAILS:
      const user = action.payload
        return state
    default:
      return state
  }
}