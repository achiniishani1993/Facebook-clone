import SearchIcon from '@mui/icons-material/Search';

export const Navbar = () => {
  return (
    <div className="navBarbox">
        <div className="navBarLeft">
            <span className="log">FaceBook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='searchicon'/>
            </div>
        </div>
        <div className="navBarRight"></div>
    </div>
  )
}
