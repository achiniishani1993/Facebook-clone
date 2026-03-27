import "./rightpane.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import MicIcon from "@mui/icons-material/Mic";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";

function RightPane() {
  type User = {
  name: string;
  img: string;
};

const [activeUser, setActiveUser] = useState<User | null>(null);

  
  const users = [
    { name: "Anna Jane", img: "/Images/15.jpg" },
    { name: "Yoga Anetha Thunga", img: "/Images/14.png" },
    { name: "Andy Francis", img: "/Images/18.jpg" },
    { name: "Chef Pierre Johonsson", img: "/Images/19.jpg" },
    { name: "Kevin Luke", img: "/Images/20.jpg" }
  ];

  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsored">Sponsored</span>
          <img src="/Images/16.webp" alt="" className="adImage" />
          <span className="adtext">
            Order your shoes today and save - use code GOOGLESTEP
          </span>
        </div>
      </div>

      <hr />

      <div className="birthdayContainer">
        <img src="/Images/17.jpg" alt="" className="birthImg" />
        <span className="birthText">
          <strong>Skylar Andy</strong> and <b>2 others</b> have birthdays today
        </span>
      </div>

      <hr />

  
      <div className="friendList">
        <div className="friendListHead">
          <span className="contacts">Contacts</span>
          <div className="fiendlistHeadLeft">
            <VideocamIcon sx={{ color: "grey" }} />
            <SearchIcon sx={{ color: "grey" }} />
            <MoreHorizIcon sx={{ color: "grey" }} />
          </div>
        </div>

        <ul>
          {users.map((user, index) => (
            <li
              key={index}
              className="onlineFriend"
              onClick={() => setActiveUser(user)}
            >
              <div className="onlinefriendImageContainer">
                <img src={user.img} alt="" className="onlinefriendImg" />
                <span className="onlineStatus"></span>
              </div>
              <span className="fiendName">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>

     
      {activeUser && (
        <div className="chatBox">
          
          {/* HEADER */}
          <div className="chatBoxItem">
            <div className="chatBoxItemleft">
              <img
                src={activeUser.img}
                alt=""
                className="onlinefriendImg"
              />
              <span>{activeUser.name}</span>
            </div>

            <div className="chatBoxItemRight">
              <VideocamIcon sx={{ color: "#1877f2" }} />
              <CallIcon sx={{ color: "#1877f2" }} />
              <SettingsIcon sx={{ color: "#1877f2" }} />
              <CloseIcon
                sx={{ color: "#1877f2", cursor: "pointer" }}
                onClick={() => setActiveUser(null)}
              />
            </div>
          </div>

          {/* MIDDLE */}
          <div className="chatBoxMiddle"></div>

          {/* BOTTOM */}
          <div className="chatBoxBottom">
            <input
              type="text"
              placeholder="Type a message...."
              className="typemessage"
            />

            <div className="chatBoxBottomIcon">
              <div className="chatBoxBottomFeature">
                <ImageIcon sx={{ color: "grey" }} />
                <GifIcon sx={{ color: "grey" }} />
                <SentimentSatisfiedIcon sx={{ color: "grey" }} />
                <MicIcon sx={{ color: "grey" }} />
                <AttachMoneyIcon sx={{ color: "grey" }} />
                <SportsEsportsIcon sx={{ color: "grey" }} />
                <CameraAltIcon sx={{ color: "grey" }} />
              </div>

              <div className="chatBoxBottomLike">
                <i
                  className="fa-regular fa-thumbs-up fa-2x"
                  style={{ color: "#1877f2" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RightPane;