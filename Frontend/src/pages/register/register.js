import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Apikey } from "../../api";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [inpending, setIspending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setIspending(true);
    try {
      const res = await axios.post(Apikey + "/auth/register", {
        username,
        email,
        password,
      });

      await setIspending(false);
      toast.success("Register successfully.", {
        autoClose: 1000,
        theme: "dark",
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", {
        theme: "dark",
      });
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Username..."
          maxLength={15}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
        />
        <label htmlFor="email">Email</label>

        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Email..."
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          maxLength={6}
          className="registerInput"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <button className="loginButton" type="submit" disabled={inpending}>
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span className="regiserror">Something went wrong....!</span>}
    </div>
  );
};

export default Register;
