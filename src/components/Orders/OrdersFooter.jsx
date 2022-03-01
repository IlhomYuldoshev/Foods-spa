import React from 'react';
import {PaymentContext} from "../../assets/Context/PaymentContext";
import {useSelector} from "react-redux";

const OrdersFooter = ({sortedFoods}) => {
  const setIsPay = React.useContext(PaymentContext)
  const orderedFoods = useSelector(({order}) => order.orderedFoods)

  const sortedFoodsKeys = sortedFoods.map(item => item.id)
  const sortedFoodsList = sortedFoodsKeys.map(key => orderedFoods[key])
  const currentTypeTotalPrice = sortedFoodsList.reduce((acc, curr) => (acc + curr.price), 0).toFixed(2)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if(sortedFoodsList.length) {
      setIsPay(true)
    } else {
      console.log("suka ovqatni zakaz qil avval!!!")
    }
  }

  return (
    <div className="orders__footer">
      <dl className="orders-total-price-list">
        <div className="d-item">
          <dt>Discount</dt>
          <dd>$ 0</dd>
        </div>
        <div className="d-item">
          <dt>Sub total</dt>
          <dd>$ {currentTypeTotalPrice}</dd>
        </div>
      </dl>

      <button onClick={onSubmitHandler} className="button button--primary">Continue to Payment</button>
    </div>
  );
};

export default OrdersFooter;
