import "./post.css";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";



function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <img src="/Images/12.jpg" alt="profile Image" className="postImage" />
          <div className="postNameTime">
            <span className="postUserName">James Anthony</span>
            <div className="postTimePrivacy">
              <span className="postTime">5 mins</span>
              <PublicIcon
                className="postPrivacyIcon"
                sx={{ fontSize: 16 }}
                htmlColor="rgb(113, 113, 114)"
              />
            </div>
          </div>
        </div>
        <div className="postCenter">
          <div className="postCaption">
            <p>
              A day well spent at a lovely restaurant 🍽️✨ A day well spent with
              good food, good vibes, and even better company ❤️ Sometimes it's
              the simple moments like this that make everything feel just right.
            </p>
          </div>
          <img
            src="/Images/13.jpg"
            alt="Breakfast Plate"
            className="postedImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomFirst">
            <div className="postBottomLeft">
              <ThumbUpIcon className="reactionPic" htmlColor="rgb(33, 33, 254)" />
              <FavoriteIcon className="reactionPic" htmlColor="red"/>
              <i className="fa-solid fa-face-surprise"  style={{ color: "#f7b928",  backgroundColor: "black",    borderRadius: "50%",  }}></i>
              <span className="likeCount">206</span>
            </div>
            <div className="postBottomRight">
              <span className="postBottomRightCommets">20 Comments</span>
              <span className="postBottomRightShares">10 shares</span>
            </div>
          </div>
          <hr/>
          <div className="postBottomSecond">
           <div className="postBottomSecondIcon">
           <i className="fa-regular fa-thumbs-up"></i>
            <span className="postBottomSecondText">Like</span>
           </div>
            <div className="postBottomSecondIcon">
            <i className="fa-regular fa-comment"></i>
            <span className="postBottomSecondText">Comment</span>
           </div>
            <div className="postBottomSecondIcon">
         <i className="fa-solid fa-share"></i>
            <span className="postBottomSecondText">Share</span>
           </div>
          </div>
            <hr/>
            <div className="postBottomThird">

            </div>
        </div>
      </div>
    
    </div>
    
  );
}

export default Post;
