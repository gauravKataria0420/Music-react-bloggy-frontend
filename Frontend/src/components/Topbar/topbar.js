import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { postPicApi } from "../../api";
import { toast } from "react-toastify";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    toast.success("Logout successfully.", {
      autoClose: 1200,
      theme: "dark",
    });
    dispatch({ type: "LOGOUT" });
  };
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
          href="https://github.com/gauravKataria21"
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
        <a
          href="https://www.linkedin.com/in/itsgauravkatariaa
"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class=" TopIcon fab fa-linkedin"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link exact="true" className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/setting">
              Setting
            </Link>
          </li>

          <li className="topListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting">
            <img className="topImg" src={postPicApi + user.profilePic} alt="" />
          </Link>
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
