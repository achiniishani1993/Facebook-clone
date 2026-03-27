import AddPost from "../AddPost/AddPost";
import Post from "../Post/Post";
import "./postPane.css";

function PostPane() {
  return (
    <div className="postPaneBox">
      <AddPost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default PostPane;
