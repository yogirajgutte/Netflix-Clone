const API_KEYS = [
  "AIzaSyCvUU_NtToV6LAnNhfBYE03D3RQf-sIpgQ",
  "AIzaSyDJMCGyCaJ18TFn4vvehwMZ_veTOGM5-ro",
  "AIzaSyDUMZqAWA6ZOAtwBorQ-ei4YppZpRP3EDk",
  "AIzaSyBouHycavQhn2pRbHbkSGAaECHQx_JcqeY",
];

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
