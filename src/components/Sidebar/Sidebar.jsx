import React from "react"
import SidebarItem from "./SidebarItem";
import {sidebarItems} from "../../constants";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo/>
      {sidebarItems.map((item, index) => {
        return <SidebarItem Item={item} key={`${index}_${item.path}`}/>
      })}
    </div>
  )
}

export default Sidebar
