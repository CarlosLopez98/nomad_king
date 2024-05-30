import React from 'react'
import { useParams } from "react-router-dom"
import "./Profile.css"

import ProfileLeft from '../../components/Profile/ProfileLeft'
import ProfileCard from '../../components/Home/ProfileCard'
import PostSide from '../../components/Home/PostSide'
import RightSide from '../../components/Home/RightSide/RightSide'

const Profile = () => {
  const { user_id } = useParams();

  return (
    <div className="profile">
      <ProfileLeft />

      <div className="profile-center">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  )
}

export default Profile