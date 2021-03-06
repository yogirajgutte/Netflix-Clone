import { TMDB_API_KEY as API_KEY } from "./API_KEYS";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchAiringNowTV: `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopGrossing: `/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
};

export default requests;
