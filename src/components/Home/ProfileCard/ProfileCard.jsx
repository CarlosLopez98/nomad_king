import React from 'react'
import "./ProfileCard.css"

import cover from "../../../assets/images/cover.jpg"
import profile from "../../../assets/images/profileImg.jpg"

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={cover} alt="" className="coverImg" />
        <img src={profile} alt="" className="profileImg" />
      </div>

      <div className="profileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <div className="hl"></div>
        <div className="followStatus-container">
          <div className="follow">
            <span>6.890</span>
            <span>Followers</span>
          </div>

          <div className="vl"></div>

          <div className="follow">
            <span>1</span>
            <span>Follow</span>
          </div>
        </div>
        <div className="hl"></div>
      </div>

      <span>
        My Profile
      </span>
    </div>
  )
}

export default ProfileCard