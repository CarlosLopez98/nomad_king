import React from 'react'
import "./Posts.css"
import Post from "../Post/Post"

// Data
import { postsData } from "../../../data/PostsData"

const Posts = () => {
  return (
    <div className="posts">
      {postsData.map((post, id) => {
        return <Post key={id} data={post} />
      })}
    </div>
  )
}

export default Posts