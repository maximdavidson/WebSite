import React from "react";
import c from './Profile.module.css';
import MyPosts from "./Post/MyPost/MyPosts";


function Profile() {
   return(
      <main className={c.content}>
        <div>
          ava + desc
        </div>
        <MyPosts/>
      </main>
   )
}

export default Profile