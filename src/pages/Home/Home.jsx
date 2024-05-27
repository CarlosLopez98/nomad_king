import React from 'react'
import "./Home.css"

import ProfileSide from "../../components/Home/ProfileSide"

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <div className="postSide"></div>
      <div className="rightSide"></div>
    </div>
  )
}

export default Home