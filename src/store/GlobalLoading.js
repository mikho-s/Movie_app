const initialState = {
  mainSliderLoading: true,
  mainPromosLoading: true,
}

const SET_LOADING_FOR_SLIDER = 'SET_LOADING_FOR_SLIDER';
const SET_LOADING_FOR_PROMOS = 'SET_LOADING_FOR_PROMOS';


export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_FOR_SLIDER:
      return {
        ...state,
        mainSliderLoading: action.payload,
      };
    case SET_LOADING_FOR_PROMOS:
      return {
        ...state,
        mainPromosLoading: action.payload,
      };
    default:
      return state
  }
};

export const setLoadingForSlider = (isLoading) => ({ type: SET_LOADING_FOR_SLIDER, payload: isLoading });
export const setLoadingForPromos = (isLoading) => ({ type: SET_LOADING_FOR_PROMOS, payload: isLoading });