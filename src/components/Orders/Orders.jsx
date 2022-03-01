import React from 'react';
import OrdersFoodItem from "./OrdersFoodItem";
import OrdersFooter from "./OrdersFooter";
import {useDispatch, useSelector} from "react-redux";
import {delFoodFromOrder} from "../../redux/actions/order";

const sortTypes = ["Dine in", "To go", "Delivery"]

const Orders = () => {
  const [sortOrder, setSortOrder] = React.useState(null)

  const dispatch = useDispatch()
  const orderedFoods = useSelector(({order}) => order.orderedFoods)
  const foods = Object.keys(orderedFoods).map(key => orderedFoods[key].items[0])

  const sortedOrderedFoods = foods.filter(obj => sortOrder === null ? obj : obj.orderType.includes(sortTypes[sortOrder]))

  const onDeleteFood = (id) => {
    if(window.confirm("Are you want to remove this food from order?")) {
    dispatch(delFoodFromOrder(id))
    }
  }

  return (
    <div className="orders">
      <div className="orders__top">
        <h2 className="title">Orders #34562</h2>
        <ul className="types-list">
          <li
            onClick={() => setSortOrder(null)}
            className={`type-item ${sortOrder === null ? "active" : ""}`}
          >
            <button className="btn">All</button>
          </li>

          {sortTypes.map((name, idx) => {
            return (
              <li
                onClick={() => setSortOrder(idx)}
                className={`type-item ${sortOrder === idx ? "active" : ""}`}
                key={name}>
                <button className="btn">{name}</button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="orders__items">
        <div className="items-head">
          <div className="left">Item</div>
          <div className="right">
            <div className="item">Qty</div>
            <div className="item">Price</div>
          </div>
        </div>

        <div className="ordered-foods-list">
          {sortedOrderedFoods.length
            ? sortedOrderedFoods.map(obj => {
              return <OrdersFoodItem
                onClickDelete={() => onDeleteFood(obj.id)}
                count={orderedFoods[obj.id].count}
                currentTotalPrice={orderedFoods[obj.id].price}
                obj={obj}
                key={obj.id}/>
            })
            : "There is not any foods to order :("
          }
        </div>
      </div>

      <OrdersFooter sortedFoods={sortedOrderedFoods}/>
    </div>
  );
};

export default Orders;
