import React, { useState } from "react";
import "./register.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Extra/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [responseData, setresponseData] = useState(null);
  const navi = useNavigate();

  const HandleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const HandleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const Handlephone = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
  };
  const HandlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const RegisteringUser = async (clientData) => {
    const url = "https://project-backend-ct05.onrender.com/userdata/register";
    const response = await axios.post(url, clientData);
    setresponseData(response.data);

    console.log(response.data);

    if (response.data.token) {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("number", response.data.phone);
      localStorage.setItem("userId", response.data.userId);

      navi("/");
      console.log(responseData);
    } else {
      window.alert("alrady registed")
      navi("/login");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    RegisteringUser(clientData);
  };
  return (
    <>
      <div className="body">
        <div className="box">
          <span className="borderline"></span>
          <form>
            <h2>Register</h2>
            <div className="inputBox">
              
                <input
                  type="text"
                  name="name"
                  required="required"
                  autoComplete="name"
                  value={name}
                  onChange={HandleName}
                />
             <span>Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              
                <input
                  type="email"
                  name="email"
                  required="required"
                  autoComplete="email"
                  value={email}
                  onChange={HandleEmail}
                />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              
                <input
                  type="number"
                  name="phone"
                  required="required"
                  autoComplete="phone"
                  value={phone}
                  onChange={Handlephone}
                />
                <span>Mobile</span>
              <i></i>
              
            </div>
            <div className="inputBox">
              
                <input
                  type="password"
                  name="password"
                  required="required"
                  value={password}
                  autoComplete="password"
                  onChange={HandlePassword}
                />
                <span>Password</span>
              <i></i>
             
            </div>

            <button type="submit" value="submit" onClick={handleSubmit}>Register</button>
            <Link to="/login">Already Register go for login</Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
