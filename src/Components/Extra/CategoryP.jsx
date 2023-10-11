import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { add } from "../Redux/cartSlice";
import Footer from "./Footer";

const CategoryP = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const params = useParams();
  const para = params.cat;

  useEffect(() => {
    axios
      .get(`https://project-backend-ct05.onrender.com/products/fetchbycart/${para}`)
      // localhost:2002/products/fetchbycart/
      .then((res) => {
        setData(res.data.result);
      });
  }, [params, para]);

  const addToCart = (post) => {
    dispatch(add(post));
  };
  return (
    <div>
      {" "}
      Categeory
      <div className="oHome">
        {" "}
        Store Page
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
};

export default CategoryP;
