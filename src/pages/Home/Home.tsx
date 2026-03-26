import Leftpane from "../../components/LeftPane/LeftPane";
import { Navbar } from "../../components/Navigation/Navbar";
import PostPane from "../../components/PostPane/PostPane";
import RightPane from "../../components/RightPane/RightPane";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bottomContainer">
        <Leftpane />
        <PostPane />
        <RightPane />
      </div>
    </div>
  );
};

export default Home;
