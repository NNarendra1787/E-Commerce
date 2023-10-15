import React from "react";
import { useNavigate } from "react-router-dom";
import "../Cart/Dashboard/dashboard.css";

const MyAccount = () => {
  const navi = useNavigate();
  const name = localStorage.getItem("name");
  return (
    <div className="account-profile">
      <h1>Hi {name} !! Welcome to BigBuDdhA</h1>

      <h2 className="heading-profile">Profile</h2>
      <div className="userDetails">
        <h2>Name: {name}</h2>
      </div>

      <div className="dashboard-welcome">
        <button onClick={() => navi("/")} className="dashboard-btn-explr">
          Keep Shoping
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
