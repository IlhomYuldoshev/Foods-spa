import React from 'react';
import {navbarItems} from "../../constants";
import request from "../../axios/instanceAxios";

const defaultModal = {
  name: "",
  price: "",
  available: "",
  type: 0
}

const Modal = ({foodEdit = defaultModal, put, onCancel, onApplyModal}) => {
  const [isCheckboxFalse, setIsCheckboxFalse] = React.useState(false)

  const [obj, setObj] = React.useState(foodEdit)

  const isNumberValue = React.useCallback((val, set) => {
      if(!isNaN(+val)) {
        setObj(p => ({...p, [set]: val}))
      }
  })

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const elements = e.target.elements
    const orderType = []

    elements.editOrderType.forEach(i => {
      return i.checked ? orderType.push(i.value) : false
    })
    const type = elements.editType.value
    const name = elements.editName.value
    const available = elements.editAvailable.value
    const price = elements.editPrice.value

    if(orderType.length === 0 || (price < 0.1) || (available < 1)) {
      setIsCheckboxFalse(true)
      setTimeout(() => {
        setIsCheckboxFalse(false)
      }, 3000)
      return
    }

    const newFood = JSON.stringify({
      name,
      orderType,
      type,
      available,
      price,
      id:  foodEdit.id ? foodEdit.id : (Math.trunc(Math.random() * 352)),
      img: `${foodEdit.img ? foodEdit.img : "https://via.placeholder.com/132"}`,
    })

    onApplyModal()

    if(!put) {
      request.post("/foods.json", newFood).then(res => console.log(res))
    } else {
      console.log("put")
      request.patch(`/foods/${foodEdit.id}.json`, newFood).then(res => {
        console.log(res)
      }).catch((e) => {
        console.log(e)
      })
    }
  }

  return (
    <div className="modal">
      <div className="modal-dialog">
        <form onSubmit={onSubmitHandler} name="modal-form" className="modal-content">
          <img src={obj.img || "https://via.placeholder.com/132"} alt="image"/>

          <div className="modal-content__input-group">
            <label htmlFor="editName">Edit Name of Food</label>
            <input
              onChange={(e) => setObj(prev => ({...prev, name: e.target.value}))}
              className="name"
              type="text" value={obj.name}
              id="editName"
              minLength={10}
              placeholder="Enter the name of food"
              required
            />
          </div>

          <div className="modal-content__input-group">
            <label htmlFor="editAvailable">Edit Available Count of Food</label>
            <input
              onChange={(e) => isNumberValue(e.target.value, "available")}
              className="available"
              type="text" value={obj.available}
              id="editAvailable"
              placeholder="Enter the count of food"
              required
            />
          </div>

          <div className="modal-content__input-group">
            <label htmlFor="editPrice">Edit Price of Food</label>
            <input
              onChange={(e) => isNumberValue(e.target.value, "price")}
              className="price"
              type="text" value={obj.price}
              id="editPrice"
              placeholder="Enter the price of food"
              required
            />
          </div>

          <div className="modal-content__types">
            <h3 className="title">
              Choose food type
            </h3>

            {navbarItems.map((typeName, idx) => {
              return (
                <label className="type-label" key={typeName}>
                  <input
                    type="radio" name="editType" value={idx} required/>
                  <span>{typeName}</span>
                </label>
              )
            })}
          </div>

          <div className="modal-content__order-types">
            <h3 className="title">
              Choose order types
            </h3>
            <label className="orderType-label">
              <input
                type="checkbox"
                value="Dine in"
                name="editOrderType"
              />
              <span>Dine in</span>
            </label>
            <label className="orderType-label">
              <input
                type="checkbox"
                value="To go"
                name="editOrderType"
              />
              <span>To Go</span>
            </label>
            <label className="orderType-label">
              <input
                type="checkbox"
                value="Delivery"
                name="editOrderType"
              />
              <span>Delivery</span>
            </label>
          </div>

          <div className="modal-content__actions">
            <div onClick={onCancel} className="action-danger-btn">Cancel</div>
            <button type="submit" className="action-apply-btn">Apply</button>
          </div>
        </form>
      </div>

      {
        isCheckboxFalse && <div className="modal__error">Please fill all fields</div>
      }
    </div>
  );
};

export default Modal;
