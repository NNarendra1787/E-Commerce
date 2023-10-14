import React, { useState } from "react";
import "./logo.css";
import Profile from "../Auth/Profile";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import SearchInp from "../Pages/SearchInp";
// import "./Navbar.css"

const LogosFile = () => {
  const [showButton, setShowButton] = useState(false);
  const [search, setSearch] = useState("");
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.cartTotalQuantity;
  const navi = useNavigate();

  // useEffect(()=>{
  //   const api = `https://project-backend-ct05.onrender.com/products/fetchdata`;
  // },[])

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
      <div className="nav-logo">
        <ul>
          {/* <li>
            <i
              class="fa fa-search"
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
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </li> */}
          <SearchInp />
          <div className="cart-profile">
            <NavLink to="/cart" id="cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <span class="products">{cartCount}</span>
            </NavLink>
            <button id="profile" onClick={handleClick}>
              <i
                class="fa fa-user"
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
