import { useState } from "react";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import "./leftPane.css";

interface Page {
  name: string;
  img: string;
}

function Leftpane() {
  const [search, setSearch] = useState<string>("");

  const pages: Page[] = [
    { name: "MeetPlace", img: "/Images/2.png" },
    { name: "Fish & Grill Resturant", img: "/Images/3.jpg" },
    { name: "Online game station", img: "/Images/4.png" },
    { name: "Shooes shooes", img: "/Images/5.jpg" },
    { name: "Toy Market", img: "/Images/6.png" },
    { name: "Travel with Wife", img: "/Images/7.png" },
    { name: "Hotel Swiss", img: "/Images/8.png" },
    { name: "Sweet Cafe", img: "/Images/9.png" },
    { name: "Tatoo shop", img: "/Images/10.jpg" },
    { name: "Lux Jewellery Market", img: "/Images/11.jpg" }
  ];

  const filteredPages = pages.filter((page: Page) =>
    page.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="leftPaneBox">
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItems">
            <MarkUnreadChatAltIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">Messages</span>
          </li>
          <li className="leftPaneMenuItems">
            <GroupIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">Groups</span>
          </li>
          <li className="leftPaneMenuItems">
            <RssFeedIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">Feed</span>
          </li>
          <li className="leftPaneMenuItems">
            <FlagIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">Pages</span>
          </li>
          <li className="leftPaneMenuItems">
            <CalendarMonthIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">Events</span>
          </li>
          <li className="leftPaneMenuItems">
            <BuildIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">Settings</span>
          </li>
          <li className="leftPaneMenuItems">
            <SportsEsportsIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">Games</span>
          </li>
          <li className="leftPaneMenuItems">
            <NewspaperIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">News</span>
          </li>
          <li className="leftPaneMenuItems">
            <WorkOutlineIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">Jobs</span>
          </li>
          <li className="leftPaneMenuItems">
            <AddShoppingCartIcon className='leftPaneMenuIcon' />
            <span className="leftPaneMenuText">Market</span>
          </li>

          <hr />

          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
            <input
              type="text"
              placeholder="Search pages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pageSearchInput"
            />
          </div>

          <div className="pageList">
            {filteredPages.map((page: Page, idx: number) => (
              <li key={idx} className="pageListItem">
                <img src={page.img} alt={page.name} className="pagePic" />
                <span className="pageName">{page.name}</span>
              </li>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Leftpane;