import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import { Apikey } from "../../api";
import "./home.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios
        .get(Apikey + "/post/" + search)
        .then((responce) => {
          setPosts(responce.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchPosts();
  }, [search]);
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
