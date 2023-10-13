import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductCou() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const api = `https://project-backend-ct05.onrender.com/products/fetchdata`;

    axios
      .get(api)
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div>
      <div>
        {data
          .filter((item) => item.comp === "Acc")
          .slice(15, 25)
          .map((post) => {
            const { title2, image, price, crossPrice, rating } = post;
            <div>
                <img src={image} alt="/" className=""/>
            </div>
          })}
      </div>
    </div>
  );
}

export default ProductCou;
