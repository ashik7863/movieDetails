import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import loader from "../assets/loaderLogin.gif";

const DetailsView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const API_KEY = "375fe249";
  useEffect(() => {
    setIsLoading(true);
    const fetchMovie = async () => {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      setMovie(data);
      setIsLoading(false);
    };
    fetchMovie();
  }, []);
  return (
    <div className="movie-list">
      <div className="movie-card">
        {isLoading && (
          <>
            <img src={loader} alt="loader" className="loader" />
          </>
        )}
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
