import React from 'react';
import {PaymentContext} from "../../assets/Context/PaymentContext";
import {radioList} from "../../constants";

const Payment = () => {
  const setIsPay = React.useContext(PaymentContext)

  const onCancelPayment = (e) => {
    e.preventDefault()
    setIsPay(false)
  }

  return (
    <div className="payment">
      <div className="payment__header">
        <h2 className="title">Payment</h2>
        <div className="info">3 payment method available</div>
      </div>

      <form name="payment">
        <div className="payment__type">
          {radioList.map(({ImgSvg, ImgCheck, text, id}) => {
            return (
              <div className="radioWrapper" key={`${text}_${id}`}>
                <input id={id} className="radio" name="payment-type" type="radio"/>
                <label htmlFor={id} className="custom">
                  <ImgSvg/>
                  <div className="text">{text}</div>
                  {ImgCheck && <ImgCheck/>}
                </label>
              </div>
            )
          })}
        </div>

        <div className="payment__center">
          <div className="payment__inputs-wrapper">
            <div className="input-group">
              <label htmlFor="inputName">Cardholder Name</label>
              <input type="text" id="cardholderName" placeholder="Levi Ackerman"/>
            </div>
            <div className="input-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" maxLength="16" placeholder="2564 1421 0897 1244"/>
            </div>

            <div className="input-group-wrapper">
              <div className="input-group">
                <label htmlFor="expirationDate">Expiration Date</label>
                <input type="text" id="expirationDate" placeholder="02/2022"/>
              </div>
              <div className="input-group">
                <label htmlFor="cvv">CVV</label>
                <input type="password" id="cvv"/>
              </div>
            </div>
          </div>

          <div className="payment__inputs-wrapper">
            <div className="input-group-wrapper">
              <div className="input-group">
                <label htmlFor="orderType">Order Type</label>
                <select className="select" name="orderType" id="orderType">
                  <option value="">Dine in</option>
                  <option value="">To Go</option>
                  <option value="">Delivery</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="tabelNo">Table no.</label>
                <input disabled type="text" id="tabelNo" value="140"/>
              </div>
            </div>
          </div>
        </div>

        <div className="payment__footer">
          <button onClick={onCancelPayment} className="button">Cancel</button>
          <button type="submit" className="button button--primary">Confirm Payment</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
