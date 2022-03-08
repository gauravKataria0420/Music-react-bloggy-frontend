import "./post.css";

const Post2 = () => {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://i1.sndcdn.com/artworks-h8xxot1V1Ndn5ygR-nruauw-t500x500.jpg"
        alt="worng pic"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postcat">Music</span>
          <span className="postcat">life</span>
        </div>
        <span className="postTitle">Aurora: Runaway</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
        <p className="postDecs">
          "Runaway" is a song by Norwegian singer Aurora released as the first
          and lead single of her debut extended play (EP) Running with the
          Wolves (2015) and It was released on 7 February 2015 through Glassnote
          Records.
        </p>
      </div>
    </div>
  );
};

export default Post2;
