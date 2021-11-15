import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Frontend with React js</span>
        <span className="headerTitleLg">Music Blogs</span>
      </div>
      <img className="headerImg" src="./image/headimg/10.jpg" alt="" />
    </div>
  );
};

export default Header;
