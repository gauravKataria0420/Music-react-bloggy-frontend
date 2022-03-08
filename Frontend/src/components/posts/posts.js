import "./posts.css";
import Post1 from "../post/post1";
import Post2 from "../post/post2";
import Post3 from "../post/post3";
import Post4 from "../post/post4";

const Posts = () => {
  return (
    <div className="posts">
      <Post1 />
      <Post2 />
      <Post3 />
      <Post4 />
    </div>
  );
};

export default Posts;
