import AboutPage from "@pages/about/AboutPage";
import ErrorPage from "@pages/errorPage/ErrorPage";
import LoginPage from "@pages/login/LoginPage";
import MoviePage from "@pages/moviepage/MoviePage";
import MoviesPage from "@pages/moviesPage/MoviesPage";
import PersonPage from "@pages/personPage/PersonPage";
import TvSerialPage from "@pages/tvSeriesPage/TvSerialPage";
import TvsPage from "../pages/tvsPage/TvsPage";

export const routes = [
  // { path: "/", element: <HomePage />, exact: true },
  { path: "login", element: <LoginPage />, exact: true },
  { path: "*", element: <ErrorPage />, exact: true },
  { path: "about", element: <AboutPage />, exact: true },
  { path: "movies", element: <MoviesPage />, exact: true },
  // { path: "movie/:id/:name", element: <MoviePage />, exact: true },
  { path: "movie/:id", element: <MoviePage />, exact: false },
  // { path: "movies/genre", element: <GenrePage />, exact: true },
  { path: "tv/:id", element: <TvSerialPage />, exact: true },
  // { path: "tvs", element: <TvsPage />, exact: true },
  { path: "tvs", element: <MoviesPage />, exact: true },
  { path: "person/:id", element: <PersonPage />, exact: true },
]

