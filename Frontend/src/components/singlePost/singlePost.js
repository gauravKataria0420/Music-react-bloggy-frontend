import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://filmdaily.co/wp-content/uploads/2020/05/lede-tokyo-sucks-1300x731.jpg"
          alt="alt"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Seprate fanbase of Tokyo ! Watch her On{" "}
          <span className="netflix">NetFlix</span> go fast
          <div className="singlePostEdit">
            <i className=" singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Gaurav Kataria</b>
          </span>
          <span className="singlePostDate"> 3 Hour ago</span>
        </div>
        <p className="singlePostDecs">
          Tokyo (Silene Oliveira) is a fictional character in the Netflix series
          Money Heist, portrayed by Úrsula Corberó.[1] The de facto protagonist
          of the series, she is the unreliable narrator[2] and a runaway robber
          who is scouted by the Professor to participate in his heists. Tokyo is
          a young thief on the run from the police after a failed robbery in
          which her boyfriend was killed. She was hired by the Professor to help
          in carrying out a heist of the Royal Mint in Madrid. Together with the
          other seven robbers chosen for the heist, she is taken to a secluded
          villa where they plan the heist for five months. The Professor asks
          each of the robbers to choose a city name to hide their identities
          during the robbery and she chooses Tokyo.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
