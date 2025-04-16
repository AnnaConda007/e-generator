import Feed from "../../components/feed/feed";
import SideNavComponent from "../../components/side-nav/side-nav";
import "./home.css"
const Home = () => {

    return (
        <div className="home-page">
            <SideNavComponent />
            <Feed />
        </div>)
};

export default Home


