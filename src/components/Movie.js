import axios from "axios";
import React, { useState, useEffect } from "react";

import AllMovies from "./AllMovies";

const Movie = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState('descending');
  const url = "https://www.omdbapi.com/?s=marvel&apikey=375fe249";
  const API_KEY = "375fe249";
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(url);
      const finalData = await response.json();
      setData(finalData.Search);
    };
    fetchMovie();
  }, []);
  const handleSearch = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
    );
    console.log(data.Response);
    if(data.Response==='False'){
      alert(data.Error)
    }else{
      setData(data.Search);
    }
  };
  
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  }
  
  const sortedMovies = data.sort((a, b) => {
    if (sortBy === 'ascending') {
      return a.Year - b.Year;
    } else {
      return b.Year - a.Year;
    }
  });


  return (
   <>
   <div className="div-parent">
   <div>
   <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
   </div>
   <div className="sort-options">
        <label htmlFor="sort-select">Sort By:</label>
        <select id="sort-select" value={sortBy} onChange={handleSortChange}>
          <option value="ascending">Release Year (Ascending)</option>
          <option value="descending">Release Year (Descending)</option>
        </select>
      </div>
      </div>
   <AllMovies data={data}/>
   </>
   
  );
};

export default Movie;
