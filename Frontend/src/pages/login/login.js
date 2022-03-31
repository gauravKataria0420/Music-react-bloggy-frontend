import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { Apikey } from "../../api";

const Login = () => {
  const userRef = useRef();
  const passRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(Apikey + "/auth/login/", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={HandleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your Username..."
          id="username"
          ref={userRef}
        />
        <span
          style={{
            color: "green",
            textAlign: "start",
            marginTop: "5px",
          }}
        >
          Enter your username lower case
        </span>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your Password..."
          id="password"
          ref={passRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register ?
        </Link>
      </button>
    </div>
  );
};

export default Login;
