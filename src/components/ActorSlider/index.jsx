import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../App.css";
import { Navigation } from "swiper/modules";

const ActorSlider = ({ movie }) => {
    const actorImgUrl = "https://image.tmdb.org/t/p/w200";

    return (
        <div className="actors-slider">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
            >
                {movie.credits.cast.slice(0, 10).map((actor) => (
                    <SwiperSlide key={actor.cast_id}>
                        <div className="actor-card">
                            <img
                                src={`${actorImgUrl}${actor.profile_path}`}
                                alt={actor.name}
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/200x300?text=No+Image";
                                }}
                            />
                            <p>{actor.name}</p>
                            <p className="character">as {actor.character}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ActorSlider;
