import React from 'react';
import {itemsSetting} from "../constants";
import {ReactComponent as OptionSvg} from "../assets/images/icons/Option.svg"
import {ReactComponent as PlusSvg} from "../assets/images/icons/Add.svg"
import Navbar from "../components/Navbar/Navbar";
import FoodItemEdit from "../components/EditFoods/FoodItemEdit";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../components/Modal/Modal";
import {getAllFoods, setLoading} from "../redux/actions/foods";
import SettingsCategories from "../components/EditFoods/SettingsCategories";

const SettingPage = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [currentEditFood, setCurrentEditFood] = React.useState(false)
  const [isPut, setIsPut] = React.useState(false)

  const {filters: {type, orderType}, foods} = useSelector(({filters, foods}) => {
    return {
      filters,
      foods: foods.foods
    }
  })
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getAllFoods(type, orderType))
  }, [type, orderType])

  const onClickEditFood = (obj) => {
    setCurrentEditFood(obj)
    setIsPut(true)
    setShowModal(true)
  }

  const onClickCancel = () => {
    setIsPut(false)
    setCurrentEditFood(undefined)
    setShowModal(false)
  }

  const onClickAddNewFood = () => {
    setIsPut(false)
    setCurrentEditFood(undefined)
    setShowModal(true)
  }

  const onApplyModal = () => {
    setIsPut(false)
    setCurrentEditFood(undefined)
    setShowModal(false)
  }

  return (
    <div className="settings">
      <h2 className="settings__title">
        Settings
      </h2>
      <div className="settings__main">
        <SettingsCategories/>

        <div className="settings__main-products-management">
          <div className="header">
            <h2 className="header__title">Products Management</h2>
            <button className="button button--security">
              <div className="button-inner">
                <OptionSvg/>
                <span>Manage Categories</span>
              </div>
            </button>
          </div>

          <Navbar/>

          <div className="editable-foods-list">
            <div className="editable-foods-list__inner">
              <div onClick={onClickAddNewFood} className="item item-add-btn">
                <div className="item-add-btn__inner">
                  <PlusSvg/>
                  <div className="text">Add new dish</div>
                </div>
              </div>
              {foods.map(obj => {
                return <FoodItemEdit editBtnHandle={() => onClickEditFood(obj)} foodItem={obj} key={obj.id}/>
              })}
            </div>
          </div>

          <div className="applyChanges">
            <button className="button">Discard Changes</button>
            <button className="button button--primary">Save Changes</button>
          </div>
        </div>
      </div>

      {
        showModal && <Modal foodEdit={currentEditFood} put={isPut} onCancel={onClickCancel} onApplyModal={onApplyModal}/>
      }
    </div>
  );
};

export default SettingPage;
