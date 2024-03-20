import React from "react";
import c from '../MyPost/MyPost.module.css'
import Post from "../Post";

function MyPosts(){
   return(
      <div>
         <div>
          My post
        </div>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <Post/>
        <Post/>
      </div>
   )
}

export default MyPosts