import React from "react";
import c from "../MyPost/MyPost.module.css";
import Post from "../Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/state";

function MyPosts(props) {
  let postsElements = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef(); // createRef создаёт ссылку на элемент

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div>
        <h3>My post</h3>
      </div>
      <div className={c.input}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button className={c.btn} onClick={addPost}>
          Add post
        </button>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
