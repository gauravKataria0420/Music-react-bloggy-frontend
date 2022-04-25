import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import { Apikey } from "../../../api";
import "./write.css";
import { toast } from "react-toastify";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [disable, setDisable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    console.log("handler works");
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(Apikey + "/upload", data);
      } catch (err) {
        toast.error("Post cannot uploaded...", {
          autoClose: 1200,
        });
        console.log("file error " + err);
      }
    } else {
      console.log("not done");
    }
    try {
      const res = await axios.post(Apikey + "/post/", newPost);
      toast.info("Post successfully uploaded...", {
        autoClose: 1600,
      });
      await setDisable(false);
      setTimeout(() => {
        window.location.replace("/post/" + res.data._id);
      }, 2000);
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
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit" disabled={disable}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
