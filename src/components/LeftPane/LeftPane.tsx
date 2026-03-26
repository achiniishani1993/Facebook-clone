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
        </div>
      </div>
    </div>
  )
}

export default Leftpane