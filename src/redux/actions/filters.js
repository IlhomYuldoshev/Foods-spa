import {SET_FOOD_TYPE, SET_FOOD_ORDER_TYPE} from "../types";

export const setFoodType = (payload) => {
  return {
    type: SET_FOOD_TYPE,
    payload
  }
}

export const setFoodOrderType = (payload) => {
  return {
    type: SET_FOOD_ORDER_TYPE,
    payload
  }
}
