import React from 'react';
import {ReactComponent as LogoSvg} from "../../assets/images/icons/logo.svg"
import {NavLink} from "react-router-dom";

const Logo = () => {
  return (
    <NavLink
      to="/"
      className="sidebar__item logo"
    >
      <div className="top"></div>
      <div className="center">
        <div className="center__wrapper">
          <div className="center__inner">
            {<LogoSvg/>}
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </NavLink>
  );
};

export default Logo;
