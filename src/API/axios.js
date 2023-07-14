import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  // headers: {
  //   "API-KEY": "ff6d485a306c42a077ed38179f1002cc"
  // }
  params: {
    api_key: "ff6d485a306c42a077ed38179f1002cc",
    language: 'en-US'

  }
});

export default instance;




export const getPromoSimpleReq = async (simpleFetchUrl, additionalParams = {}) => {
  const responce = await instance.get(simpleFetchUrl, { params: additionalParams });
  // console.log(responce);
  return responce.data
}
// export const getReq = async (simpleFetchUrl, additionalParams = {}) => {
//   console.log(simpleFetchUrl, additionalParams);
//   const responce = await instance.get(simpleFetchUrl, { params: additionalParams });
//   console.log(responce);
//   return responce.data
// }

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

