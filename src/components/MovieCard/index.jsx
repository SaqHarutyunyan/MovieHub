import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const img_url = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;
