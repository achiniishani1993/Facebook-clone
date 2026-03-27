import "./rightpane.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";


function RightPane() {
 const [activeUser, setActiveUser] = useState(null);

  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsored">Sponsored</span>
          <img src="/Images/16.webp" alt="Yoga Girl" className="adImage" />
          <span className="adtext">
            Order your shoes today and save - use code GOOGLESTEP at checkout
            for an exclusive discount!
          </span>
        </div>
      </div>
      <hr />
      <div className="birthdayContainer">
        <img src="/Images/17.jpg" alt="gift box" className="birthImg" />
        <span className="birthText">
          <strong>Skylar Andy</strong> and <b> 2 others </b> have birthdays
          today{" "}
        </span>
      </div>
      <hr />
      <div className="friendList">
        <div className="friendListHead">
          <div className="friendListHeatRight">
            <span className="contacts">Contacts</span>
          </div>
          <div className="fiendlistHeadLeft">
            <VideocamIcon className="videocall" sx={{ color: "grey" }} />
            <SearchIcon className="searchfriend" sx={{ color: "grey" }} />
            <MoreHorizIcon className="searchmore" sx={{ color: "grey" }} />
          </div>
        </div>

        <ul>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img
                src="/Images/15.jpg"
                alt="friend"
                className="onlinefriendImg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="fiendName">Anna Jane</span>
          </li>
        </ul>
          <ul>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img
                src="/Images/14.png"
                alt="friend"
                className="onlinefriendImg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="fiendName">Yoga Anetha Thunga</span>
          </li>
        </ul>
          <ul>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img
                src="/Images/18.jpg"
                alt="friend"
                className="onlinefriendImg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="fiendName">Andy Francis</span>
          </li>
        </ul>
          <ul>
          <li className="onlineFriend">
            <div className="onlinefriendImageContainer">
              <img
                src="/Images/19.jpg"
                alt="friend"
                className="onlinefriendImg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="fiendName">Chef Pierre Johonsson</span>
          </li>
        </ul>
          <ul>
          <li className="onlineFriend" onClick={()=> setActiveUser("Kevin Luke")}>
            <div className="onlinefriendImageContainer">
              <img
                src="/Images/20.jpg"
                alt="friend"
                className="onlinefriendImg"
              />
              <span className="onlineStatus"></span>
            </div>
            <span className="fiendName">Kevin Luke</span>
          </li>
        </ul>
      </div>
      {activeUser && (
  <div className="chatBox">
    Chatting with {activeUser}
  </div>
)}
    </div>
  );
}

export default RightPane;
