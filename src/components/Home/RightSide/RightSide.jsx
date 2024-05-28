import React from 'react'
import "./RightSide.css"

import PopularPlaces from "../../Home/PopularPlaces/PopularPlaces"

// Iconos
import {
  IoHomeOutline,
  IoHomeSharp,
  IoSettingsOutline,
  IoSettingsSharp,
  IoChatboxEllipsesOutline,
  IoChatboxEllipsesSharp,
  IoNotificationsOutline,
  IoNotifications
} from "react-icons/io5";

const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="navIcons">
        <IoHomeSharp className="selected" />
        <IoSettingsOutline />
        <IoChatboxEllipsesOutline />
        <IoNotificationsOutline />
      </div>

      <PopularPlaces />
    </div>
  )
}

export default RightSide