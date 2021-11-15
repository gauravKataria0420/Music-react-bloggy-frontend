import Sidebar from "../../components/sidebar/sidebar";
import "./setting.css";

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label className="PP">Profile Picture</label>
          <div className="settingPP">
            <img src="https://wallpapercave.com/wp/wp6387533.jpg" alt="" />
            <label htmlFor="fileInput">
              <i className="settingPpIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="gauravkataria0420" />
          <label>Email</label>
          <input type="email " placeholder="gauravkataria@gmail.com" />
          <label>Password</label>
          <input type="password" className="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
