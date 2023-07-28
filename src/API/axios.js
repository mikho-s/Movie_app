import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,

  params: {
    api_key: process.env.REACT_APP_API_KEY,
    // language: 'en-US'
  }
});

export default instance;




export const getPromoSimpleReq = async (simpleFetchUrl, additionalParams = {}) => {
  const responce = await instance.get(simpleFetchUrl, { params: additionalParams });
  // console.log(responce);
  return responce.data
}
export const getSearchReq = async (query) => {
  const responseMovie = await instance.get('search/movie', { params: { query: query } });
  const responseTv = await instance.get('search/tv', { params: { query: query } });
  let movies = responseMovie.data.results;
  let tvShows = responseTv.data.results;

  if (movies.length > 5) {
    movies = movies.slice(0, 5);
  }

  if (tvShows.length > 5) {
    tvShows = tvShows.slice(0, 5);
  }
  console.log(movies);
  console.log(tvShows);
  return [movies, tvShows];

}

export const getTrailerAndVideos = async (simpleFetchUrl, additionalParams = {}) => {
  const responce = await instance.get(simpleFetchUrl, { params: additionalParams });

  const allVideosData = responce.data.results;
  // console.log('VIDEOS');
  // console.log(allVideosData);
  const videosData = allVideosData.splice(0, 5);
  // console.log(videosData);

  const trailerElement = allVideosData.find(elem =>
    elem.type === "Trailer" &&
    (elem.name.toLowerCase().includes("final trailer") ||
      elem.name.toLowerCase().includes("official trailer") ||
      elem.name.toLowerCase().includes("trailer")));
  if (trailerElement) {
    return { trailerKey: trailerElement.key, videosData };
  }
  return { trailerKey: undefined, videosData };

};

