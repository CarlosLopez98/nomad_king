import React from 'react'
import { useState, useRef } from 'react'
import "./PostShare.css"

import profileImg from "../../../assets/images/profileImg.jpg"
// Iconos
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes
} from "@iconscout/react-unicons"

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (ev) => {
    if (ev.target.files && ev.target.files[0]) {
      let img = ev.target.files[0]

      setImage({
        image: URL.createObjectURL(img)
      })
    }
  }

  return (
    <div className="postShare">
      <img src={profileImg} alt="" />

      <div className="postInput">
        <input type="text" placeholder="What's happening" />

        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>

          <button className="button ps-button">
            Share
          </button>

          <div style={{ display: "none" }}>
            <input type="file" name="myImage" id="myImage" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>

        {image && (
          <div className="previewImg">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>

    </div>
  )
}

export default PostShare