import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import "./home.css";

const Home = () => {
  // const [Post, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("data getting true....");
      let url = "http://localhost:4000/api/post";
      const res = await axios
        .get(url)
        .then((responce) => {
          console.log(responce);
          console.log("all data get....");
        })
        .catch((error) => {
          console.log(error);
          console.log("component mount... but don't get data");
        });
    };

    fetchPosts();
    // console.log(fetchPosts());
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/post/")
  //     .then((res) => {
  //       res.json(res);
  //       console.log(res);
  //     })
  //     .then((post) => {
  //       setPosts(post);
  //       console.log(post);
  //     });
  // }, []);

  console.log("home running");

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
