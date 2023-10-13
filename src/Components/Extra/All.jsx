import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pages.css";
import "react-toastify/dist/ReactToastify.css";
import AddToCart from "../Cart/AddToCart";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Sheeping from "../Sheepping/Sheep";
import HomVid from "../Sheepping/HomVid";
// import Coursole2 from "../Coursole2/Coursole2";

function All() {
  const [data, setData] = useState([]);
  // const [data, setData] = useState();

  useEffect(() => {
    // const api =  `http://localhost:2002/api/data`;
    const api = `https://project-backend-ct05.onrender.com/products/fetchdata`;

    axios
      .get(api)
      .then((res) => setData(res.data.result))
      // .then((res)=> setData(res.data))
      .catch((err) => console.log(err));
    // {console.log(data.result)}
  }, []);

  return (
    <div className="oHome">
      <h2 className="head" id="head">
        Best Seller
      </h2>
      <hr className="head" />
      <div className="HomeData">
        {data
          .filter((item) => item.comp === "total")
          .map((item, ind) => (
            <div key={ind} className="RomeBox">
              <img src={item.image} alt="/" className="homeimg" />
              <div className="RemidCard">
                <Link to={`/ClickPage/${item.title2}`} state={item}>
                  <h3 className="homeText">{item.title2}</h3>
                </Link>
                <h4 className="itsPrice">Sale Price:{item.price}</h4>
                <h4 className="notPrice">Original Price:{item.crossPrice}</h4>
                <h4 className="fa fa-star checked">{item.rating}</h4>
              </div>
              <AddToCart item={item} />
            </div>
          ))}
      </div>
      <HomVid />
      {/* <Coursole2 /> */}
      <Sheeping />

      <div className="Allfooter ReFooter">
        <Footer />
      </div>
    </div>
  );
}

export default All;
