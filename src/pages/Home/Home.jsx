import React from 'react'
import "./Home.css"

import ProfileSide from "../../components/Home/ProfileSide"
import PostSide from "../../components/Home/PostSide"
import RightSide from '../../components/Home/RightSide/RightSide'

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  )
}

export default Home