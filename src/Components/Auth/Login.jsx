import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Extra/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const navi = useNavigate();

  const emailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const loginUser = async (userData) => {
    const api = "https://project-backend-ct05.onrender.com/userdata/login";
    const response = await axios.post(api, userData);
    setResponseData(response.data);

    console.log(response.data);

    if (response.data.token) {
      console.log(responseData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.userData.name);
      localStorage.setItem("userId", response.data.userData._id);

      navi("/");
    } else {
      window.alert("invalide Credential");
      navi("/register");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    loginUser(userData);
  };

  return (
    <>
      <div className="body">
        <div className="box">
          <span className="borderline"></span>
          <form>
            <h2>Login</h2>
            <div className="inputBox">
              <input
                type="text"
                name="user-name"
                required="required"
                onChange={emailHandler}
                value={email}
              />
              <span>Email(as a userName)</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="user-password"
                required="required"
                onChange={passwordHandler}
                value={password}
              />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <Link to="/forget">Forget Password</Link>
              <Link to="/register">Register</Link>
            </div>
            <button type="submit" value="login" onClick={submitHandler}>
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
