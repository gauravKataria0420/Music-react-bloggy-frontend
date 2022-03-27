import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Apikey, postPicApi } from "../../api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../../context/Context";
import "./singlePost.css";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [decs, setDecs] = useState("");
  const [updateMode, setupdateMode] = useState(false);
  const { user } = useContext(Context);

  const updateHandler = async () => {
    try {
      await axios.put(Apikey + `/post/${post._id}`, {
        username: user.username,
        title,
        decs,
      });
      console.log("post updated");
      console.log(post);
      setupdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(Apikey + "/post/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDecs(res.data.decs);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(Apikey + `/post/${post._id}`, {
        data: {
          username: user.username,
        },
      });
      console.log("post deleted");
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={postPicApi + post.photo}
            alt="alt"
            className="singlePostImg"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            className="singlePostTitleInput"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className=" singlePostIcon far fa-edit"
                  onClick={(e) => {
                    setupdateMode(true);
                  }}
                ></i>
                <i
                  className="singlePostIcon fas fa-trash-alt "
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link linkauthor">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            type="text"
            className="singlePostDecsInput"
            value={decs}
            onChange={(e) => setDecs(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlePostDecs">{decs}</p>
        )}
        {updateMode && (
          <button className="updateModeButton" onClick={updateHandler}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
