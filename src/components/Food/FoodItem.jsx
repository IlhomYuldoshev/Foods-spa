import React from 'react';

const FoodItem = ({obj, onClick, orderedCount}) => {
  const leftFood = obj.available - (orderedCount.count ? orderedCount.count : 0)
  const onClickHandler = () => {
    if(leftFood !== 0) {
      onClick()
    } else {
    console.log("count of food is over :(")
    }
  }

  return (
    <div className="food-item" onClick={onClickHandler}>
      <img className="food-img" src={obj.img} alt="food image"/>
      <h3 className="food-name">{obj.name}</h3>
      <div className="price">$ {obj.price}</div>
      <div className="availableCount">{leftFood} Bowls available</div>
    </div>
  );
};

export default FoodItem;
