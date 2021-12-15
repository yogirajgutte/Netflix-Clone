import React from "react";
import { useState, useEffect } from "react";
import fetchTrailer from "./FetchTrailer";
import Youtube from "./Youtube";
import axios from "./axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/w500";
const Row = ({ title, fetchURL, isLargeRow }) => {
  // console.log("Row Video Rendered");

  const [movies, setMovies] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);

      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    if (showVideo) {
      setShowVideo(false);
      setTrailerURL("");
    } else {
      fetchTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((videoID) => {
          //   console.log("Row VideoID: ", videoID);
          setTrailerURL(videoID);
        })
        .catch((error) => {
          console.log(error);
        });

      setShowVideo(true);
    }
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (showVideo) {
          // console.log("Row Event Escape pressed.");
          setShowVideo(false);
          setTrailerURL("");
        }
      }
    };
    document.body.addEventListener("keydown", handleEsc);

    return () => {
      document.body.removeEventListener("keydown", handleEsc);
    };
  });

  // console.log(trailerURL);

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={
                baseURL + (isLargeRow ? movie.poster_path : movie.backdrop_path)
              }
              alt={movie.name}
              className={`poster${(isLargeRow && " large_poster") || ""}`}
              onClick={() => {
                handleClick(movie);
              }}
            />
          );
        })}
      </div>
      {showVideo && (
        <Youtube
          videoID={trailerURL}
          setShowVideo={setShowVideo}
          showVideo={showVideo}
        />
      )}
    </section>
  );
};

export default Row;
