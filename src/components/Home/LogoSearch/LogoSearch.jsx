import React from 'react'
import "./LogoSearch.css"
import Logo3 from "../../../components/Logo3"
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className="logoSearch">
      {/* <img src={logo} alt="" /> */}
      <Logo3 />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="search-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch