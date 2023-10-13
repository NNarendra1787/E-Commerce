import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Search() {
    const [data, setData] = useState([])
    const params = useParams()
    const para = params.cat

    useEffect(()=>{
        const api = `https://project-backend-ct05.onrender.com/products/search/${para}`;
        axios
        .get(api)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
      },[para])
  return (
    <div>Search Hi Everyone
        {data.map((lt, ind)=>(
            <div>
                <img src={lt.image} alt="/" />    
                <h1>HI</h1>       
            </div>
            
        ))}
    </div>
  )
}

export default Search