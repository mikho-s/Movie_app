const initialState = [
  { rowTitle: 'Netflix Original', urlRequest: '/discover/tv', additionalParams: { with_networks: 213 } },
  { rowTitle: 'Marvel', urlRequest: '/discover/movie', additionalParams: { with_companies: 420 } },
  { rowTitle: 'Popular Movies', urlRequest: 'movie/popular' },
  // { rowTitle: 'Popular TVs', urlRequest: 'tv/popular' },
  { rowTitle: 'Top Rated Movies', urlRequest: 'movie/top_rated' },
  { rowTitle: 'Top Tvs', urlRequest: 'discover/tv', additionalParams: { sort_by: 'vote_count.desc' } },
  { rowTitle: 'Upcoming', urlRequest: 'movie/upcoming' },
];

const SET_PREVIEWS = 'SET_PREVIEWS';

export const previewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREVIEWS:
      return action.payload;
    default:
      return state;
  }
};

export const setPreviews = (previews) => ({
  type: SET_PREVIEWS,
  payload: previews,
});