import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import { Apikey } from "../../api";
import "./home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios
        .get(Apikey + "/post/")
        .then((responce) => {
          setPosts(responce.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
