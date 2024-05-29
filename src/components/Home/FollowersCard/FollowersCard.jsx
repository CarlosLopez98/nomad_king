import React from 'react'
import "./FollowersCard.css"

import { followers } from "../../../data/FollowersData"

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you</h3>

      {followers.map((follower, id) => {
        return (
          <div key={id} className="follower">
            <div className="">
              <img src={follower.img} alt="" className="followerImg" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">
              Follow
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCard