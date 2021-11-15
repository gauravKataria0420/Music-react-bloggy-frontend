import "./sidebar.css";

const Sidebar2 = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="./Image/topImage/2.jpg"
          alt="   Image Cannot loaded for anyReason"
        />
        <p className="introduction">
          Hey! I am Gaurav Kataria and i am a React Doveloper. Basically
          React.js a comprehensive JavaScript library for building user
          interfaces.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Style</li>
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

export default Sidebar2;
