import "./feed.css"
import Header from "../header/header";
import PostCard from "./post-card/post-card";
import { postMock } from "../../mock/post-mock";

const Feed = () => {
    return (
        <main className="feed">
            <Header />
            <div className="feed-list">
                {postMock.map((item, i) => (
                    <PostCard key={i} postData={item} />

                ))}
            </div>
        </main >
    )
};

export default Feed


