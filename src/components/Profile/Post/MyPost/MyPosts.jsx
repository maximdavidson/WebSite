import React from "react";
import c from '../MyPost/MyPost.module.css'
import Post from "../Post";

function MyPosts(props){

   let postsElements =
   props.postData.map( (post) => <Post message={post.message} likesCount={post.likesCount}/>)

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