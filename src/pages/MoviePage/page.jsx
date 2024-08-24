import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActorSlider from "../../components/ActorSlider";
import VideoSlider from "../../components/VideoSllider";
import Loading from "../../components/Loading";

const api_key = "9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const img_url = "https://image.tmdb.org/t/p/w500";

function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(
            `${main_url}/movie/${id}?api_key=${api_key}&append_to_response=credits,videos`
        )
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
            });
    }, [id]);

    if (!movie) return <Loading />;

    return (
        <div className="movie-page">
            <div
                className="movie-cont"
                style={{
                    backgroundImage: `url(${img_url}${movie.backdrop_path})`,
                }}
            >
                <div className="img-wrraper">
                    <img
                        src={`${img_url}${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
                <div className="movie-details">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres:</h3>
                    <ul>
                        {movie.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <h3>Actors:</h3>
                    <div className="actors-list">
                        <ActorSlider movie={movie} />
                    </div>
                    <h3>Trailers:</h3>
                    <VideoSlider movie={movie} />
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
