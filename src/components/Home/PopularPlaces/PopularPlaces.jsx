import React from 'react'
import "./PopularPlaces.css"

// Data
import { places } from "../../../data/PlacesData"

const PopularPlaces = () => {
  return (
    <div className="popularPlaces">
      <h3>Explore Places</h3>

      <div className="places">
        {places.map((place, id) => (
          <div key={id} className="place">
            <img src={place.img} alt="" />
            <div className="cover">
              <h4>{place.name}</h4>
              <span>{place.city}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularPlaces