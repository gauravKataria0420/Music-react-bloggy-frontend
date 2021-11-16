import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar({ user }) {
  return (
    <div className="top">
      <div className="topLeft">
        <a
          href="https://www.facebook.com/vivhan.18"
          target="blank_"
          rel="noopener noreferrer"
        >
          <i className="TopIcon fab fa-facebook-square"></i>
        </a>
        <a
          href="https://github.com/gauravKataria0420"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="TopIcon fab fa-github-square"></i>
        </a>
        <a
          href="https://www.instagram.com/ll_gaurav.k_ll/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="TopIcon fab fa-instagram"></i>
        </a>
        <i className="TopIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link exact className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/post/:postId">
              Existing-Post
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/setting">
              Setting
            </Link>
          </li>

          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src="./image/topImage/1.jpg" alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link topregis" to="/register">
                Register
              </Link>
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        )}
        <i className=" searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
