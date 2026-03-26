import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

export const Navbar = () => {
  return (
    <div className="navBarbox">
        <div className="navBarLeft">
            <span className="log">FaceBook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='searchicon'/>
                <input placeholder='search friends' className="searchinput" />
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">HomePage</span>
                <span className="navBarLink">Profile</span>
            </div>
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <PersonIcon/>
                    <span className="iconTag">3</span>
                </div>
                 <div className="navBarIcon">
                    <MessageIcon/>
                     <span className="iconTag">5</span>
                 </div>
                  <div className="navBarIcon">
                    <SettingsIcon />
                     <span className="iconTag">1</span>
                  </div>
            </div>
            <div className="pic">
                <img src="/Images/1.jpeg" alt="profile image" className="profilePic" />
            </div>
        </div>
    </div>
  )
}
