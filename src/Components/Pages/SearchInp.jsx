import React from "react";
import { useSearchBox } from "./SearchBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchInp = () => {
  const [values, setValues] = useSearchBox();
  const navi = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://project-backend-ct05.onrender.com/products/search/${values.title}`
      );
      setValues({ ...values, results: data });
      navi("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
        <button id="submitbtn" type="submit">
          <span className="SearchName">
          Search
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchInp;
