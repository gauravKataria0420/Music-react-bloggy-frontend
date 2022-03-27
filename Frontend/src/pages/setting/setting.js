import Sidebar from "../../components/sidebar/sidebar";
import "./setting.css";
import { Context } from "../../context/Context";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";

const Setting = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="setting">
        <div className="settingWrapper">
          <div className="settingTitle">
            <span className="settingUpdateTitle">Update your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
          </div>

          <form className="settingForm">
            <label className="PP">Profile Picture</label>

            <div className="settingPP">
              <img src={user.profilePic} alt="" />

              <label htmlFor="fileInput">
                <i className="settingPpIcon far fa-user-circle"></i>
              </label>

              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder={user.username} />
            <label>Email</label>
            <input type="email " placeholder="XYZ@gmail.com" />
            <label>Password</label>
            <input type="password" className="password" />
            <button className="settingSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Setting;
