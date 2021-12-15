import { YOUTUBE_API_KEYS as API_KEYS } from "./API_KEYS";

const fetchTrailer = (query) => {
  const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query
    .split(" ")
    .join("%20")}%20trailer&maxResults=1&key=${
    API_KEYS[Math.floor(Math.random() * API_KEYS.length)]
  }`;

  return fetchVideoID(fetchURL);
};

const fetchVideoID = async (fetchURL) => {
  const response = await fetch(fetchURL);
  const result = await response.json();

  //   remove in production
  // console.log("Fetch Trailer result: ", result.items[0].id.videoId);
  return result.items[0].id.videoId;
};

export default fetchTrailer;
