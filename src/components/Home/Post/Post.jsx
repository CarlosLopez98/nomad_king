import React from 'react'
import "./Post.css"

// Icons
import {
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoHeart,
  IoHeartOutline
} from "react-icons/io5";

const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.img} alt="" />

      <div className="postReact">
        {data.liked ? <IoHeart className="liked" /> : <IoHeartOutline />}
        <IoChatbubbleOutline />
        <IoPaperPlaneOutline />
      </div>

      <span>{data.likes} {data.likes > 1 ? "likes" : "like"}</span>

      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post