import {SET_FOODS, SET_LOADING} from "../types";

const initialState = {
  foods: [],
  isLoading: true,
}

export const foodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOODS:
      return {...state, foods: action.payload}

    case SET_LOADING:
      return {...state, isLoading: action.payload}

    default:
      return state
  }
}
