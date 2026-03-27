import AddPost from "../AddPost/AddPost";
import Post from "../Post/Post";
import "./postPane.css";

function PostPane() {
  const numberOfPosts = 5; // Number of Post components you want to render

  return (
    <div className="postPaneBox">
      <AddPost />
      {Array.from({ length: numberOfPosts }).map((_, index) => (
        <Post key={index} />
      ))}
    </div>
  );
}

export default PostPane;
