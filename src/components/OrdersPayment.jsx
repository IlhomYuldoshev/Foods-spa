import React, {useState} from 'react';
import Orders from "./Orders/Orders";
import Payment from "./Payment/Payment";
import {PaymentContext} from "../assets/Context/PaymentContext";

const OrdersPayment = () => {
  const [isPay, setIsPay] = useState(false)

  return (
    <PaymentContext.Provider value={setIsPay}>
      <div className="ordersPayment">
        {isPay
          ? <><Payment/><div onClick={() => setIsPay(false)} className="payment-darker"></div></>
          : <Orders/>}
      </div>
    </PaymentContext.Provider>
  );
};

export default OrdersPayment;
