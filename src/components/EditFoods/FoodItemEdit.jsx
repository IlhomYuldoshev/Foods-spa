import React from 'react';
import {ReactComponent as EditSvg} from "../../assets/images/icons/Edit.svg";

const FoodItemEdit = ({editBtnHandle, foodItem : {id, img, name, price, available}}) => {
  return (
    <div className="item">
      <img className="food-img" src={img} alt="food image"/>
      <h3 className="title">{name}</h3>
      <div className="priceCount">
        <div className="price">$ {price}</div>
        <div className="circle"></div>
        <div className="count">{available} Bowls</div>
      </div>

      <div onClick={editBtnHandle} className="editBtn">
        <EditSvg/>
        <span>Edit dish</span>
      </div>

    </div>
  );
};

export default FoodItemEdit;
