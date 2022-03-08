import "./post.css";

const Post4 = () => {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://www.lyricsbell.com/wp-content/uploads/2017/12/thanks-a-lot-dino-james.jpg"
        alt="worng pic"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postcat">Music</span>
          <span className="postcat">life</span>
        </div>
        <span className="postTitle">Thanks a lot || Dino James</span>
        <hr />
        <span className="postDate">5 Hour ago</span>
        <p className="postDecs">
          Dino james composed a song "Thanks a Lot" Basically Dino Belong to
          Bhopal. Punjabi Dino James – Thanks A Lot Last modified on July 29th,
          2020 at 12:00 AM Thanks A Lot is an intense Hindi rap song with lyrics
          drafted by Dino James, He also lent his voice for song and Riddhiman
          Chatterje gave suitable music to it. Himanshu Tyagi is director of
          music video.
        </p>
      </div>
    </div>
  );
};

export default Post4;
