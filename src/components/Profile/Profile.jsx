import React from "react";
import c from './Profile.module.css';
import MyPosts from "./Post/MyPost/MyPosts";
import ProfileInfo from "./Post/ProfileInfo/ProfileInfo";


function Profile() {
   return(
      <main>
        <ProfileInfo/>
        <MyPosts/>
      </main>
   )
}

export default Profile