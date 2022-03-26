import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import { Apikey } from "../../../api";
import "./write.css";

const Write = () => {
  const [title, setTitle] = useState("");
  const [decs, setDecs] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      decs,
    };
    console.log("handler works");
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(Apikey + "/upload", data);
      } catch (err) {
        console.log("file error " + err);
      }
    } else {
      console.log("not done");
    }
    try {
      const res = await axios.post(Apikey + "/post/", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log("new post error " + err);
    }
  };

  return (
    <div className="write">
      <div className="write-img-wrapper">
        {file && (
          <img src={URL.createObjectURL(file)} className="writeImg" alt="6" />
        )}
      </div>
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            id="fileInput"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type=" text"
            name=""
            placeholder="Tell your Story...."
            id=""
            className="writeInput writeText"
            onChange={(e) => setDecs(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
