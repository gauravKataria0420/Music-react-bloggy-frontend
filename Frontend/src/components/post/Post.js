import { Link } from "react-router-dom";
import { postPicApi } from "../../api";
import "./post.css";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postimg"
          src={postPicApi + post.photo}
          alt="worng pic"
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postcat" key={post._id}>
              {c.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <div className="date-user">
          <span className="postDate">{post.username}</span>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDecs">{post.decs}</p>
      </div>
    </div>
  );
};

export default Post;
