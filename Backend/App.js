const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
const cors = require("cors");
const mongoose = require("mongoose");
const homeRoute = require("./Routes/Home");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const postRoute = require("./Routes/posts");
const categoryRoute = require("./Routes/categories");
const path = require("path");
dotenv.config();
app.use("/images", express.static(path.join(__dirname, "/images")));

// MiddleWare
app.use(express.json());
app.use(cors());

// MONGO AND MONGOOSE PROCESS
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

// MULTER PROCESS
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Your file has been submitted");
});

// USING ROUTE
app.use("/", homeRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/post", postRoute);
app.use("/api/categories", categoryRoute);

// LISTENING SERVER
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend is Runing on ${port}...`);
});
