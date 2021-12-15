import React, { useState, useEffect } from "react";
import BannerInfo from "./BannerInfo";
import Youtube from "./Youtube";
import axios from "./axios";
import requests from "./requests";
import fetchTrailer from "./FetchTrailer";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let newMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];

      // newVideoID will be asigned video ID of current video
      const newVideoID = await fetchTrailer(
        newMovie?.title || newMovie?.name || newMovie?.original_name
      );
      // console.log("newVideoID: ", newVideoID);

      newMovie = { ...newMovie, videoID: newVideoID };
      // console.log(newMovie);
      setMovie(newMovie);
    };

    fetchMovie();
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (showVideo) {
          setShowVideo(false);
        }
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  return (
    <React.Fragment>
      <div className="banner-placeholder">
        {showVideo ? (
          <Youtube setShowVideo={setShowVideo} videoID={movie.videoID} />
        ) : (
          <BannerInfo
            newMovie={movie}
            showVideo={showVideo}
            setShowVideo={setShowVideo}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Banner;
