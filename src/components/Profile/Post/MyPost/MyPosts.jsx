import React from "react";
import c from '../MyPost/MyPost.module.css'
import Post from "../Post";

function MyPosts(){

   let postData = [
      {id: 1, message: 'Hello, how are you?', likesCount: 10},
      {id: 2, message: 'Let`s drink a tea!', likesCount: 12},
   ]

   let postsElements =
   postData.map( (post) => <Post message={post.message} likesCount={post.likesCount}/>)

   return(
      <div>
         <div>
          <h3>My post</h3>
        </div>
        <div className={c.input}>
          <textarea></textarea>
          <button className={c.btn}>Add post</button>
        </div>
            {postsElements}
      </div>
   )
}

export default MyPosts