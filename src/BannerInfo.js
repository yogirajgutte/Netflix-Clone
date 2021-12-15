import React, { useState, useEffect } from "react";

const BannerInfo = ({ newMovie, showVideo, setShowVideo }) => {
  const [movie, setMovie] = useState(newMovie);
  useEffect(() => {
    setMovie(newMovie);
  }, [newMovie]);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner-fadeTop"></div>
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button
            className="banner_button"
            onClick={() => {
              setShowVideo(!showVideo);
            }}
          >
            Play
          </button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default BannerInfo;
