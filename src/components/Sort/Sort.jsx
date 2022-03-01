import React from 'react';
import {useSelector} from "react-redux";
import {setFoodOrderType} from "../../redux/actions/filters";

const Sort = React.memo(({dispatch}) => {
  const orderType = useSelector(({filters}) => filters.orderType)
  const selectRef = React.useRef(null)

  const onChangeSelect = React.useCallback(() => {
    dispatch(setFoodOrderType(selectRef.current.value))
  }, [])

  return (
    <div className="Sort-Popup">
      <select
        onChange={onChangeSelect}
        className="select"
        ref={selectRef}
        value={orderType}
      >
        <option value="All">All</option>
        <option value="Dine in">Dine in</option>
        <option value="To go">To Go</option>
        <option value="Delivery">Delivery</option>
      </select>
    </div>
  )
})

export default Sort;
