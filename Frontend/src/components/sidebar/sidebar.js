import "./sidebar.css";
import { useState, useEffect } from "react";
import { Apikey } from "../../api";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(Apikey + "/categories/");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="./Image/topImage/1.jpg"
          alt="Cannot loaded for anyReason"
        />
        <p className="introduction">
          Hey! I am Gaurav Kataria and i am a Frontend Doveloper. And I am
          pretty much comfortable on React.js Basically React.js a comprehensive
          JavaScript library for building interactive user interfaces.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
              <li className="sidebarListItem">
                {c.name}
              </li>
            </Link>
             
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a
            href="https://www.facebook.com/vivhan.18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a
            href="https://github.com/gauravKataria0420"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-github-square"></i>
          </a>
          <a
            href="https://www.instagram.com/ll_gaurav.k_ll/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fab fa-instagram"></i>
          </a>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
