import produce from "immer"
import {ADD_FOOD, DELETE_FOOD} from "../types";


const initialState = {
  orderedFoods: {},
  totalPrice: 0
}

export const order = produce((state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD: {
      state.orderedFoods[action.payload.id]
        ? state.orderedFoods[action.payload.id].items.push(action.payload.obj)
        : state.orderedFoods[action.payload.id] = {items: [action.payload.obj]}
      state.orderedFoods[action.payload.id].price = getSum(state.orderedFoods[action.payload.id].items)
      state.orderedFoods[action.payload.id].count = state.orderedFoods[action.payload.id].items.length

      state.totalPrice = getSum(Object.keys(state.orderedFoods).map(key => state.orderedFoods[key]))
      break
    }

    case DELETE_FOOD:{
      delete state.orderedFoods[action.payload]
      state.totalPrice = getSum(Object.keys(state.orderedFoods).map(key => state.orderedFoods[key]))
      break
    }

    default:
      return state
  }
})

const getSum = (arr) => {
  const sum =  +arr.reduce((acc, item) => {
    return acc + +item.price
  }, 0).toFixed(2)
  return sum
}
