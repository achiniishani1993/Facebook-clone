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

function Leftpane() {
  return (
    <div className="leftPaneBox">
        <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuItems">
          < MarkUnreadChatAltIcon className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">Messages</span>
          </li>
           <li className="leftPaneMenuItems">
          < GroupIcon className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">Groups</span>
          </li>
           <li className="leftPaneMenuItems">
          < RssFeedIcon className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">Feed</span>
          </li>
           <li className="leftPaneMenuItems">
          < FlagIcon  className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">Pages</span>
          </li>
           <li className="leftPaneMenuItems">
          < CalendarMonthIcon className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">Events</span>
          </li>
           <li className="leftPaneMenuItems">
          < BuildIcon className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">Settings</span>
          </li>
           <li className="leftPaneMenuItems">
          < SportsEsportsIcon className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">Games</span>
          </li>
           <li className="leftPaneMenuItems">
          <  NewspaperIcon className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">News</span>
          </li>
           <li className="leftPaneMenuItems">
          < WorkOutlineIcon className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">Jobs</span>
          </li>
            <li className="leftPaneMenuItems">
          < AddShoppingCartIcon className='leftPaneMenuIcon' />
          <span className="leftPaneMenuText">Market</span>
          </li>
          <hr/>
          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
          </div>
         <div className="pageList">
           <li className="pageListItem">
            <img src="/Images/2.png" alt="page profiles" className="pagePic" />
            <span className="pageName">MeetPlace</span>
          </li>
           <li className="pageListItem">
            <img src="/Images/3.jpg" alt="page profiles" className="pagePic" />
            <span className="pageName">Fish & Grill Resturant</span>
          </li>
           <li className="pageListItem">
            <img src="/Images/4.png" alt="page profiles" className="pagePic" />
            <span className="pageName">Online game station</span>
          </li>
           <li className="pageListItem">
            <img src="/Images/5.jpg" alt="page profiles" className="pagePic" />
            <span className="pageName">Shooes shooes</span>
          </li>
           <li className="pageListItem">
            <img src="/Images/6.png" alt="page profiles" className="pagePic" />
            <span className="pageName">Toy Market</span>
          </li>
           <li className="pageListItem">
            <img src="/Images/7.png" alt="page profiles" className="pagePic" />
            <span className="pageName">Travel with Wife</span>
          </li>
           <li className="pageListItem">
            <img src="/Images/8.png" alt="page profiles" className="pagePic" />
            <span className="pageName">Hotel Swiss</span>
          </li>
           <li className="pageListItem">
            <img src="/Images/9.png" alt="page profiles" className="pagePic" />
            <span className="pageName">Sweet Cafe</span>
          </li>
           <li className="pageListItem">
            <img src="/Images/10.jpg" alt="page profiles" className="pagePic" />
            <span className="pageName">Tatoo shop</span>
          </li>
           <li className="pageListItem">
            <img src="/Images/11.jpg" alt="page profiles" className="pagePic" />
            <span className="pageName">Lux Jewellery Market</span>
          </li>

         </div>
        </div>
      </div>
    </div>
  )
}

export default Leftpane