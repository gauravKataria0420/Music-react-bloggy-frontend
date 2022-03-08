import "./post.css";

const Post3 = () => {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://static.toiimg.com/photo/msid-65159636/65159636.jpg"
        alt="worng pic"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postcat">Music</span>
          <span className="postcat">life</span>
        </div>
        <span className="postTitle">Vilen - Ek Raat (Official Video)</span>
        <hr />
        <span className="postDate">4 Hour ago</span>
        <p className="postDecs">
          About Ek Raat Listen to Ek Raat online. Ek Raat is a Hindi language
          song and is sung by Vilen. Ek Raat, from the album Ek Raat, was
          released in the year 2018. The duration of the song is 3:44. Download
          Hindi songs online from JioSaavn.
        </p>
      </div>
    </div>
  );
};

export default Post3;
