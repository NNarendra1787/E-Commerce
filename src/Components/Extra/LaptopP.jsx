import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/cartSlice";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function LaptopP() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://project-backend-ct05.onrender.com/products/fetchbysubcat/lap")
      .then((res) => {
        setData(res.data.result);
      });
  });

  const addToCart = (post) => {
    dispatch(add(post));
  };
  return (
    <div>
      <div className="oHome">
        <div className="omeData">
          {data.slice(0, 8).map((post) => {
            const { title2, image, price, crossPrice, rating } = post;
            return (
              <div className="RomeBox">
                <img src={image} alt="/" className="homeimg" />
                <div className="RemidCard">
                  <Link to={`/ClickPage/${title2}`} state={post}>
                    <h3 className="homeText">{title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {price}</h4>
                  <h5 className="notPrice">Original Price: {crossPrice}</h5>
                  <h4 className="fa fa-star checked">{rating}</h4>
                </div>
                <button className="addToCart" onClick={() => addToCart(post)}>
                  AddToCart
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LaptopP;
