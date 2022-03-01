import React from 'react';
import {itemsSetting} from "../../constants";

const SettingsCategories = () => {
  return (
    <div className="settings__main-navbar">
      {itemsSetting.map(({ImgSvg, title, text, active}) => {
        return (
          <div className={`item ${active ? "active" : ""}`} key={`${title}_${text}`}>
            {<ImgSvg/>}
            <div className="item-content">
              <h3 className="title">{title}</h3>
              <div className="text">{text}</div>
            </div>
            <div className="item-right-line">
              <div className="item-right-line-inner"></div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default SettingsCategories;
