import React from 'react';
import {ReactComponent as DelSvgImage} from "../../assets/images/icons/Trash.svg";

const OrdersFoodItem = ({onClickDelete, currentTotalPrice, count, obj: {name, price, img}}) => {
  return (
    <div className="food-item">
      <div className="food-item__info">
        <div className="imgName">
          <img src={img} alt="food"/>
          <div className="name-wrapper">
            <div className="name">{name.slice(0, 17)} ...</div>
            <div>$ {price}</div>
          </div>
        </div>

        <div className="countPrice">
          <div className="count">{count}</div>
          <div className="price">$ {currentTotalPrice}</div>
        </div>
      </div>

      <div className="food-item__note">
        <input className="noteInput" type="text" placeholder="Order Note..."/>
        <div
          onClick={onClickDelete}
          className='btn-delete'>
          <DelSvgImage/>
        </div>
      </div>
    </div>
  );
};

export default OrdersFoodItem;
