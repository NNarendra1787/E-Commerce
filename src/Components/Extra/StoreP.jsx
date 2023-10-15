import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pages.css";
import { useDispatch } from "react-redux";
import { add } from "../Redux/cartSlice";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const StoreP = () => {
  const [data, setData] = useState([]);
  // const [count, setCount] = useState(12);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://project-backend-ct05.onrender.com/products/fetchbysubcat/Acc"
      )
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
        <div className="HomeData">
          {/* {data.slice(0,50).map((post)=>{ */}
          {data
            .filter((item) => item.comp === "Acc")
            .map((post, ind) => {
              const { title2, image, price, crossPrice, rating } = post;
              // if (ind < count) {
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
                    <button
                      className="addToCart"
                      onClick={() => addToCart(post)}
                    >
                      AddToCart
                    </button>
                  </div>
                );
              // }
            })}
        </div>
        <p onClick={() => setCount(count + 8)} className="counting">More ⬇️</p>
      </div>
      <div className="Allfooter">
        <Footer />
      </div>
    </div>
  );
};

export default StoreP;
