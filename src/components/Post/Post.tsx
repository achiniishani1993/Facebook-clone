import "./post.css";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

function Post() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(206);
  const [reaction, setReaction] = useState<"like" | "love" | "wow" | null>(
    null,
  );

  const [comment, setComment] = useState("");
 const [comments, setComments] = useState<string[]>([]);

  const handleReaction = (type: "like" | "love" | "wow") => {
    if (reaction === null) {
      setLikeCount(likeCount + 1);
    }

    setReaction(type);
    setLiked(true);
  };

  const handleComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

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
              {reaction === "like" && <ThumbUpIcon htmlColor={liked ? "#1877f2" : "gray"} />}
              {reaction === "love" && <FavoriteIcon htmlColor="red" />}
              {reaction === "wow" && (
                <i
                  className="fa-solid fa-face-surprise"
                  style={{
                    color: "#f7b928",
                    backgroundColor: "black",
                    borderRadius: "50%",
                  }}
                ></i>
              )}
              <span className="likeCount">{likeCount}</span>
            </div>

            <div className="postBottomRight">
              <span>{comments.length} Comments</span>
              <span className="postBottomRightShares">10 shares</span>
            </div>
          </div>

          <hr />

          <div className="postBottomSecond">
            <div className="postBottomSecond">
              <div
                className="postBottomSecondIcon"
                onClick={() => handleReaction("like")}
              >
                <ThumbUpIcon htmlColor=" #1877f2" />
                <span className="postBottomSecondText"></span>
              </div>

              <div
                className="postBottomSecondIcon"
                onClick={() => handleReaction("love")}
              >
                <FavoriteIcon htmlColor="red" />
                <span className="postBottomSecondText"></span>
              </div>

              <div
                className="postBottomSecondIcon"
                onClick={() => handleReaction("wow")}
              >
                <i
                  className="fa-solid fa-face-surprise"
                  style={{
                    color: "#f7b928",
                    backgroundColor: "black",
                    borderRadius: "50%",
                  }}
                ></i>
                <span className="postBottomSecondText"></span>
              </div>
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
          <hr />
          <div className="postBottomThird">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="commentInput"
            />

            <button
              className="bottombutton"
              onClick={handleComment}
              disabled={!comment.trim()}
            >
              Post
            </button>

            <div className="commentList">
              {comments.map((c, i) => (
                <p key={i}>{c}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
