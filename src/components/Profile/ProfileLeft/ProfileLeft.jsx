import React from 'react'
import "./ProfileLeft.css"
import LogoSearch from '../../Home/LogoSearch'
import InfoCard from '../InfoCard'
import FollowersCard from '../../Home/FollowersCard'

const ProfileLeft = () => {
  return (
    <div className="profileLeft">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft