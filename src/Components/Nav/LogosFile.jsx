import React, { useState } from "react";
import "./logo.css";
import Profile from "../Auth/Profile";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css"

const LogosFile = () => {
  const [showButton, setShowButton] = useState(false);
  const [search, setSearch] = useState("");
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.cartTotalQuantity;
  const navi = useNavigate();

  const searchHandle = (event) => {
    event.preventDefault();
    navi("/search", { state: search });
    setSearch("");
  };
  const handleClick = () => {
    setShowButton(!showButton);
  };
  const handleHover = () => {
    setShowButton(false);
  };

  return (
    <div>
      <div className="Nav-logo">
        <ul>
          <li>
            <i
              className="fa fa-search"
              id="search"
              aria-hidden="true"
              onClick={searchHandle}
            ></i>
          </li>
          <li>
            <input
              type="search"
              className="searchbar"
              value={search}
              placeholder="...search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </li>
          <div className="cart-profile">
            <Link to="/cart" id="cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="products">{cartCount}</span>
            </Link>
            <button id="profile" onClick={handleClick}>
              <i
                className="fa fa-user"
                aria-hidden="true"
                onMouseOver={handleHover}
              ></i>
            </button>
          </div>
        </ul>
        <div>{showButton && <Profile />}</div>
      </div>
    </div>
  );
};

export default LogosFile;
