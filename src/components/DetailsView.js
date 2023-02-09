import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const DetailsView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const API_KEY = "375fe249";
  useEffect(()=>{
    const fetchMovie=async()=>{
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      setMovie(data);
    }
    fetchMovie();
    
  },[])
  return (
    <div className="movie-list">
        <div className="movie-card">
        <div className="movie-details">
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
            </div>
            <img src={movie.Poster} alt={movie.Title + " poster"} />
        </div>
    </div>
  );
};

export default DetailsView;
