const initialState = {
  moviesByPreview: {},
  moviesBySlider: []
};



const SET_MOVIES_FOR_PREVIEW = 'SET_MOVIES_FOR_PREVIEW';
const SET_MOVIES_FOR_SLIDER = 'SET_MOVIES_FOR_SLIDER';

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_FOR_PREVIEW:
      const { preview, movies } = action.payload;
      return {
        ...state,
        moviesByPreview: {
          ...state.moviesByPreview,
          [preview]: movies
        }
      };
    default:
      return state;
  }
};


export const moviesBySliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_FOR_SLIDER:
      return {
        ...state,
        moviesBySlider: action.payload,
      };
    default:
      return state;
  }
};

export const setMoviesForPreview = (preview, movies) => ({
  type: 'SET_MOVIES_FOR_PREVIEW',
  payload: { preview, movies }
});
export const setMoviesForMainSlider = (movies) => ({
  type: 'SET_MOVIES_FOR_SLIDER',
  payload: movies
});

