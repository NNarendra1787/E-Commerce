import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { add } from "../Redux/cartSlice";
import AddToCart from "../Cart/AddToCart";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../Pages/Responsive.css"

const PhoneP = () => {
  const [data, setData] = useState([]);
  // const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://project-backend-ct05.onrender.com/products/fetchbysubcat/mob")
      .then((res) => {
        setData(res.data.result);
      });
  });

  // const addToCart = (post) => {
  //   dispatch(add(post));
  // };

  return (
    <div>
      <div className="oHome">
        <div className="omeData">
          {data.slice(0, 5).map((item, ind) => {
            // const { title2, image, price, crossPrice, rating } = post;
            return (
              <div className="RomeBox">
                <img src={item.image} alt="/" className="homeimg" />
                <div className="RemidCard">
                  <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">Original Price: {item.crossPrice}</h5>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                {/* <button className="addToCart" onClick={() => addToCart(post)}>
                  AddToCart
                </button> */}
                <AddToCart item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="Allfooter">
        <Footer />
      </div>
    </div>
  );
};

export default PhoneP;
