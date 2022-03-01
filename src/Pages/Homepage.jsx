import React from 'react';
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Sort from "../components/Sort/Sort";
import Food from "../components/Food/Food";
import {getAllFoods, setLoading} from "../redux/actions/foods";
import {useDispatch, useSelector} from "react-redux";

const Homepage = () => {
  const {type, orderType} = useSelector(({filters}) => filters)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getAllFoods(type, orderType))
  }, [type, orderType])

  return (
    <div className="homepage">
      <Header/>
      <Navbar/>
      <div className="Sort-wrapper">
        <div className="Sort-wrapper__title">Choose dishes</div>
        <Sort dispatch={dispatch}/>
      </div>
      <Food/>
    </div>
  );
};

export default Homepage;
