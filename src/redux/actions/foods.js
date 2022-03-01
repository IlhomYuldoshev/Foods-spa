import {ACTUAL_FOODS, SET_FOODS, SET_LOADING} from "../types";
import request from "../../axios/instanceAxios";

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload
  }
}

export const getAllFoods = (type, orderType) => (dispatch) => {
  dispatch(setLoading(true))
  request.get("/foods.json")
    .then(response => {
      const sortedFoods = sortByType(response.data, type, orderType)
      dispatch(setFoods(sortedFoods))
      dispatch(setLoading(false))
    })
}

export const setFoods = (payload) => {
  return {
    type: SET_FOODS,
    payload
  }
}


//  -----------------         FUNCTIONS          -------------------

const sortByType = (foodsObj, type, orderType) => {
  const foods = Object.keys(foodsObj).map(key => ({...foodsObj[key], id: key}))

  if(type !== null) {
    const sortedFoods = foods.filter(item => +item.type === type && (orderType !== "All" ? item.orderType.includes(orderType) : true))
    return sortedFoods
  }
  else {
    const sortedFoods = foods.filter(item => orderType !== "All" ? item.orderType.includes(orderType) : true)
    return sortedFoods
  }
}
