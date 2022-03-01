import React from 'react';
import {setFoodType} from "../../redux/actions/filters";
import {useDispatch, useSelector} from "react-redux";
import {navbarItems} from "../../constants";

const Navbar = () => {
  const dispatch = useDispatch()

  const type = useSelector(({filters}) => filters.type)

  const onClickHandler = React.useCallback((idx) => {
    dispatch(setFoodType(idx))
  }, [])

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className={`item ${type === null ? "active" : ""}`}
            onClick={() => onClickHandler(null)}
        >
          All Foods <div className="bottomLine"></div>
        </li>
        {navbarItems.map((name, idx) => {
          return (
            <li className={`item ${type === idx ? "active" : ""}`}
              onClick={() => onClickHandler(idx)}
                key={`${name}_${idx}`}
            >
              {name} <div className="bottomLine"></div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Navbar;
