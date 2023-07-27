import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { moviesBySliderReducer, moviesReducer } from './PreviewsForHomePage';
import { loadingReducer } from './GlobalLoading';
import { previewsReducer } from './HomePagePromos';

const rootReducer = combineReducers({
  movies: moviesReducer,
  slider: moviesBySliderReducer,
  loading: loadingReducer,
  previews: previewsReducer,

});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;