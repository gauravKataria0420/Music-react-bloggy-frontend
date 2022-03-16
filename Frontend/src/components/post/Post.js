import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post" key={post._id}>
      {post.photo && (
        <img className="postimg" src={post.photo} alt="worng pic" />
      )}
      <div className="postInfo" key={post._id}>
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
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className="postDecs">{post.decs}</p>
      </div>
    </div>
  );
};

export default Post;
