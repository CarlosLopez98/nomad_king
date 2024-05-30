import React from 'react'
import "./InfoCard.css"

// Iconos
import { UilPen } from "@iconscout/react-unicons"

const InfoCard = () => {
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div className="">
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>

      <div className="info">
        <span><b>Status </b></span>
        <span>In a relationship</span>
      </div>

      <div className="info">
        <span><b>Lives in </b></span>
        <span>Bogota</span>
      </div>

      <div className="info">
        <span><b>Works at </b></span>
        <span>Globant</span>
      </div>

      <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard