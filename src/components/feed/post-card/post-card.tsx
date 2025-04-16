import { IPostMock } from "../../../mock/post-mock";
import "./post-card.css"

interface IPostCard {
    postData: IPostMock
}

const PostCard: React.FC<IPostCard> = ({ postData }) => {
    const { title, img, date, mainText } = postData

    return (
        <article className="post-card">
            <img className="post-img" src={img} alt="" aria-hidden="true" />
            <h2 className="post-title">
                {title}
                <time dateTime={date} className="post-time">{date}</time>
            </h2>
            <section className="post-text">
                {mainText}
            </section >
        </article>

    )
};

export default PostCard


