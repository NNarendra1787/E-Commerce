import React from "react";
import { Link } from "react-router-dom";
import {FaFacebookSquare,FaYoutube,FaLinkedin,FaInstagram,FaLocationArrow} from "react-icons/fa"
import {MdSmartphone} from "react-icons/md"
import "./footer.css"

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb__footer-link">
            <div className="sb__footer-link_div">
              <div className="fotterSiren">
                {/* <img src={N} alt='logoN' /> */}
                {/* <img src={N} alt="logoN" className="Nlogo" /> */}
                <h1 className="king">BigBuDdhA</h1>
              </div>
              <div className="phone">
                <MdSmartphone className="phoneSize" />
                <p>+91 1234576500</p>
              </div>
              <div className="phone">
                <FaLocationArrow className="phoneSize" />
                <p>kinggroup@hotmail.com</p>
              </div>
            </div>
            <div className="sb__footer-link_div">
              <h2>Services</h2>
              <Link to="/king">
                <p>Identity Verification</p>
              </Link>
              {/* <Link to="/king">
                <p>Criminal Check</p>
              </Link>
              <Link to="/king">
                <p>Address Verification</p>
              </Link>
              <Link to="/king">
                <p>Employee Verification</p>
              </Link> */}
              <Link to="/king">
                <p>Education Verification</p>
              </Link>
              <Link to="/king">
                <p>Credit Check</p>
              </Link>
            </div>
            <div className="sb__footer-link_div">
              <h2>Resources</h2>
              <Link to="/king">
                <p>Blog</p>
              </Link>
              <Link to="/king">
                <p>Help Center</p>
              </Link>
              {/* <Link to="/king">
                <p>Careers</p>
              </Link> */}
              <Link to="/king">
                <p>Contact Us</p>
              </Link>
            </div>
            <div className="sb__footer-link_div">
              <h2>Sites</h2>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/iPhone">
                <p>Phones</p>
              </Link>
              {/* <Link to="/iPad">
                <p>Ipads</p>
              </Link> */}
              <Link to="/store">
                <p>Store</p>
              </Link>
              {/* <Link to="/Access">
                <p>Accesseries</p>
              </Link> */}
            </div>
            <div className="sb__footer-link_div">
              <h2>Social Media</h2>
              <div className="socialmedia">
                <FaFacebookSquare className="phoneSize" />
                <FaYoutube className="phoneSize" />
                <FaLinkedin className="phoneSize" />
                <FaInstagram className="phoneSize" />
                {/* <p><img src={fb} alt="logo"/></p> */}
                {/* <p><img src={twitter} alt="logo"/></p> */}
                {/* <p><img src={linkendin} alt="logo"/></p> */}
                {/* <p><img src={insta} alt="logo"/></p> */}
              </div>
            </div>
          </div>
          <hr />

          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>
                @{new Date().getUTCFullYear()}This website comeunder. &copy;
                KingStore. All right reversed &reg;.
              </p>
            </div>
            <div className="sb__footer-below-links">
              <Link to="/king">
                <div>
                  <p>Term & condition</p>
                </div>
              </Link>
              <Link to="/king">
                <div>
                  <p>Privacy</p>
                </div>
              </Link>
              <Link to="/king">
                <div>
                  <p>Security</p>
                </div>
              </Link>
              <Link to="/king">
                <div>
                  <p>Cookies Declaration</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
