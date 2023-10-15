import React from "react";
import { useSearchBox } from "./SearchBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../Redux/cartSlice";

const SearchResu = () => {
  const [values, setValues] = useSearchBox();

  const dispatch = useDispatch()

  const addToCart = (post) => {
    dispatch(add(post))
  };
  console.log(setValues);
  return (
    <section title={"Search Result"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Result</h1>
          <h6>
            {values?.results.length < 1
              ? "No Product Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="oHome">
            <div className="omeData">
              {values.results.map((post) => {
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
                    <button
                      className="addToCart"
                      onClick={() => addToCart(post)}
                    >
                      AddToCart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResu;