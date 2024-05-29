import React from "react";
import c from "./Profile.module.css";
import MyPostsContainer from "./Post/MyPost/MyPostsContainer";
import ProfileInfo from "./Post/ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </main>
  );
}

export default Profile;
