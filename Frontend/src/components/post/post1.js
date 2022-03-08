import "./post.css";

const Post1 = () => {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://images.pexels.com/photos/814049/pexels-photo-814049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="worng pic"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postcat">Music</span>
          <span className="postcat">life</span>
        </div>
        <span className="postTitle">Yohani - Shiddat Title Track</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
        <p className="postDecs">
          Yohani Diloka de Silva, popularly known as Yohani, is a Sri Lankan
          singer, songwriter, rapper, music producer, YouTuber. She is also
          famous on TikTok and a businesswoman of musical instruments imports
          and exports. She started her music career as a YouTuber.
        </p>
      </div>
    </div>
  );
};

export default Post1;
