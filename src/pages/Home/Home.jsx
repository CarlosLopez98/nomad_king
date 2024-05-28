import React from 'react'
import "./Home.css"

import ProfileSide from "../../components/Home/ProfileSide"
import PostSide from "../../components/Home/PostSide"

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <div className="rightSide"></div>
    </div>
  )
}

export default Home