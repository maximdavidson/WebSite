import React from "react";
import c from './Profile.module.css';
import MyPosts from "./Post/MyPost/MyPosts";
import ProfileInfo from "./Post/ProfileInfo/ProfileInfo";


function Profile(props) {

   return(
      <main>
        <ProfileInfo/>
        <MyPosts postData={props.postData}/>
      </main>
   )
}

export default Profile