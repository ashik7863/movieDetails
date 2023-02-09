import React from 'react'
import { Link } from "react-router-dom";
const AllMovies = ({data}) => {
  return (
    <div>
      <div className="movie-list">
      {data && data.map((movie, idx) => (
        <div className="movie-card" key={idx}>
          <Link
            to={movie.imdbID}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img src={movie.Poster} alt={movie.Title + " poster"} />
            <div className="movie-details">
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
            </div>
          </Link>
        </div>
      ))  
    }
    </div>
    </div>
  )
}

export default AllMovies
