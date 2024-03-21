import React from "react";
import c from '../MyPost/MyPost.module.css'
import Post from "../Post";

function MyPosts(){
   return(
      <div>
         <div>
          My post
        </div>
        <div className={c.input}>
          <textarea></textarea>
          <button className={c.btn}>Add post</button>
        </div>
        <Post message='Hello, how are you?'/>
        <Post message='Let`s drink a tea!'/>
      </div>
   )
}

export default MyPosts