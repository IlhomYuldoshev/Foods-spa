import React from 'react';
import {NavLink} from "react-router-dom";

const SidebarItem = (props) => {
  const SvgImg = props.Item.SvgImg
  const path = props.Item.path

  return (
    <NavLink
      to={path}
      className="sidebar__item"
    >
      <div className="top"></div>
      <div className="center">
        <div className="center__wrapper">
          <div className="center__inner">
            {<SvgImg/>}
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </NavLink>
  );
};

export default SidebarItem;
