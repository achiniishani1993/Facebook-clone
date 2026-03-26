import "./addPost.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img
            src="/Images/1.jpeg"
            alt="account owners pic"
            className="addPostPic"
          />
          <input
            type="text"
            placeholder="What's in your mind...?"
            className="addPostInput"
          />
        </div>
        <hr className="addPostHr" />
        <div className="addPostBottom">
          <div className="addPostOptions">
            <div className="addPostOption">
              <InsertPhotoIcon htmlColor="orange" className="addPhoto" />
              <span className="addPostText">Add Photo/Video</span>
            </div>
            <div className="addPostOption">
              <AddLocationAltIcon htmlColor="red" className="addPhoto" />
              <span className="addPostText">Add Location</span>
            </div>
            <div className="addPostOption">
              <LocalOfferIcon htmlColor="blue" className="addPhoto" />
              <span className="addPostText">Add Tag</span>
            </div>
            <div className="addPostOption">
              <LiveTvIcon htmlColor="tomato" className="addPhoto" />
              <span className="addPostText">Go Live</span>
            </div>
            <button className="postButton">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
