import React from "react";
import c from "../MyPost/MyPost.module.css";
import Post from "../Post";

function MyPosts(props) {
  let postsElements = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef(); // createRef создаёт ссылку на элемент

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
        <button className={c.btn} onClick={onAddPost}>
          Add post
        </button>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
