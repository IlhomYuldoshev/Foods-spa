import React from 'react';
import FoodItem from "./FoodItem";
import {useDispatch, useSelector} from "react-redux";
import FoodItemLoader from "./FoodItemLoader";
import {addFoodToOrder} from "../../redux/actions/order";

const Food = React.memo(() => {
  const {foods, isLoading, orderedFoods} = useSelector(({foods, order}) => {
    return {
      foods: foods.foods,
      isLoading: foods.isLoading,
      orderedFoods: order.orderedFoods
    }
  })
  const dispatch = useDispatch()

  const onClickAddFoodHandler = (id, obj) => {
    dispatch(addFoodToOrder({id, obj}))
  }

  return (
    <div className="foods-list">
      {isLoading
        ? Array(9)
          .fill("")
          .map((_, idx) => (<FoodItemLoader className="food-item-loader" key={idx}/>))
        : foods.map(item => {
          return <FoodItem
            orderedCount={orderedFoods[item.id] ? orderedFoods[item.id] : 0}
            onClick={() => onClickAddFoodHandler(item.id, item)}
            obj={item}
            key={item.id}/>
        })}
    </div>
  )
})

export default Food;
