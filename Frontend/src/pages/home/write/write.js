import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <div className="write-img-wrapper">
        <img
          src="https://wallpapercave.com/wp/wp6387533.jpg"
          className="writeImg"
          alt=""
        />
      </div>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            id="fileInput"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type=" text"
            name=""
            placeholder="Tell your Story...."
            id=""
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
