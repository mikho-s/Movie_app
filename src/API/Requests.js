import axios from "axios";


const API_KEY = 'ff6d485a306c42a077ed38179f1002cc';
const URL_MAIN = 'https://api.themoviedb.org/3'
const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

// https://api.themoviedb.org/3/movie/top-rated?api_key=ff6d485a306c42a077ed38179f1002cc&language=en-US&page=1
// https://image.tmdb.org/t/p/original

const requests = {
  fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
}
// export default requests;


export default class RequestsService {



  static async getTrendingAll(page = 1) {
    const responce = await axios.get(URL_MAIN + requests.fetchTrendingAll, {
      params: {
        _page: page,
      }
    })
    // console.log(responce);
    return responce
  }


  static async getRequired(page = 1, requestParam) {
    const responce = await axios.get(URL_MAIN + requestParam, {
      params: {
        _page: page,
      }
    })
    return responce
  }




  // static async getById(id) {
  //   console.log(id);
  //   const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //   return responce
  // }
  // static async getCommentsById(id) {
  //   const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  //   return responce
  // }
}