import axios from "axios";
import React, { useState, useEffect } from "react";
import AllMovies from "./AllMovies";
import loader from "../assets/loaderLogin.gif";

const Movie = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
    );
    console.log(data.Response);
    if(data.Response==='False'){
      setIsLoading(false);
      alert(data.Error)
    }else{
      setData(data.Search);
      setIsLoading(false);
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
      {isLoading && (
          <>
            <img src={loader} alt="loader" className="loader" style={{marginLeft:'40%',position:'absolute',width:'250px'}}/>
          </>
        )}
   <AllMovies data={data}/>
   </>
   
  );
};

export default Movie;
