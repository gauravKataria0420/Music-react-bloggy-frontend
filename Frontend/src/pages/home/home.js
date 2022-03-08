import "./home.css";
import Header from "../../components/Header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
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
