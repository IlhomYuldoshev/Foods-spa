import {ADD_FOOD, DELETE_FOOD} from "../types";

export const addFoodToOrder = (payload) => {
  return {
    type: ADD_FOOD,
    payload
  }
}

export const delFoodFromOrder = (payload) => {
  return {
    type: DELETE_FOOD,
    payload
  }
}
