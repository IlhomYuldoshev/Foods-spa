import {SET_FOOD_ORDER_TYPE, SET_FOOD_TYPE} from "../types";

const initialState = {
  type: null,
  orderType: "All"
}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD_TYPE:
      return {...state, type: action.payload}

    case SET_FOOD_ORDER_TYPE:
      return {...state, orderType: action.payload}

    default:
      return state
  }
}
