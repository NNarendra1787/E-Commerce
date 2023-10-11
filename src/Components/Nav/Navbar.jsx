import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogosFile from "./LogosFile";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="NavbarHome">
        <div className="logo">
          <h1 className="logo-name">KiNgCaRtS</h1>
        </div>
        <nav>
          <input type="checkbox" id="check" />
          <div className="label">
            <label for="check">
              <i class="fas fa-bars" id="btn"></i>
              <i class="fas fa-x" id="cancel"></i>
            </label>
          </div>

          <ul className="main-nav-list">
            <li className="active">
              <NavLink
                to="/"
                className="nav_link"
                style={({ isActive }) => ({
                  color: isActive ? "lime" : "red",
                })}
              >
                Home
              </NavLink>
            </li>

            <li className="active">
              <NavLink
                to="/store"
                className="nav_link"
                style={({ isActive }) => ({
                  color: isActive ? "lime" : "red",
                })}
              >
                Store
              </NavLink>
              <div className="dropdown-list">
                <ul className="list">
                  <li>
                    <Link to="/Laptops" className="drpdwn-link">
                      Laptops
                    </Link>
                  </li>
                  <li>
                    <Link to="/Watch" className="drpdwn-link">
                      Watch
                    </Link>
                  </li>
                  <li>
                    <Link to="/headphone" className="drpdwn-link">
                      HeadPhone
                    </Link>
                  </li>
                  <li>
                    <Link to="/Keybord" className="drpdwn-link">
                      Keybord
                    </Link>
                  </li>
                  <li>
                    <Link to="/Mouse" className="drpdwn-link">
                      Mouse
                    </Link>
                  </li>
                  <li>
                    <Link to="/Speaker" className="drpdwn-link">
                      Speaker
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="active">
              <NavLink
                to="/iphone"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "lime" : "red",
                })}
              >
                PHONE
              </NavLink>
              <div className="dropdown-list">
                <ul className="list">
                  <li>
                    <Link to="/Vivo" className="drpdwn-link">
                      Vivo
                    </Link>
                  </li>
                  <li>
                    <Link to="/Redmi" className="drpdwn-link">
                      Redmi
                    </Link>
                  </li>
                  <li>
                    <Link to="/Oneplus" className="drpdwn-link">
                      OnePlus
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="active">
              <NavLink
                to="/lap"
                className="nav_link"
                style={({ isActive }) => ({
                  color: isActive ? "lime" : "red",
                })}
              >
                LAPTOPS
              </NavLink>
              <div className="dropdown-list">
                <ul className="list">
                  <li>
                    <Link to="/Lenovo" className="drpdwn-link">
                      Lenovo
                    </Link>
                  </li>
                  <li>
                    <Link to="/Macbook" className="drpdwn-link">
                      Macbook
                    </Link>
                  </li>
                  <li>
                    <Link to="/Dell" className="drpdwn-link">
                      Dell
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <LogosFile />
      </div>
    </>
  );
};

export default Navbar;
