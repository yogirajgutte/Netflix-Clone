import requests from "./requests";
import Row from "./Row";

const MainBody = () => {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Airing Now" fetchURL={requests.fetchAiringNowTV} />
      <Row title="Popular TV Shows" fetchURL={requests.fetchPopularTV} />
      <Row title="Top Rated TV Shows" fetchURL={requests.fetchTopRatedTV} />
      <Row title="Top Rated Movies" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="Popular Movies" fetchURL={requests.fetchPopularMovies} />
      <Row title="Top Grossing Movies" fetchURL={requests.fetchTopGrossing} />
    </>
  );
};

export default MainBody;
