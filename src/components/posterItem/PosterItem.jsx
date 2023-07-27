import React from 'react';
import clas from './posterItem.module.scss';
import { genresMovie, genresTv, getYearMovie, tmdbImageSrc, tmdbImageSrcW185, tmdbImageSrcW342 } from '@utils/utils';
import { useSelector } from 'react-redux';


const PosterItem = ({ movie }) => {


  const isGlobalLoadingMovies = useSelector((state) => state.loading.mainPromosLoading || state.loading.mainSliderLoading);


  const getGenresNames = (movie) => {
    let genresData;
    if (movie.release_date) {
      genresData = genresMovie;
    } else {
      genresData = genresTv;
    }
    return movie.genre_ids.map((genreId) => {
      const genre = genresData.find((genre) => genre.id === genreId);
      return genre ? <div key={genreId} className={clas.genreItem}>{genre.name}</div> : null;
    });
  };

  const loadPosterImg = (path) => {
    if (isGlobalLoadingMovies) {
      return tmdbImageSrcW185(path)
    } else {
      return tmdbImageSrcW342(path)

    }
  }

  return (
    <article className={clas.item}>
      <img src={tmdbImageSrcW185(movie.poster_path)} alt="poster" />
      {/* <img src={loadPosterImg(movie.poster_path)} alt="poster" /> */}
      <div className={clas.description_body}>
        <div className={clas.title_poster}>{movie.title || movie.name}</div>
        <div className={clas.vote_date_poster}>
          <div className={clas.vote_poster}>{movie.vote_average}</div>
          <div className={clas.data_poster}> {getYearMovie(movie)} </div>
        </div>
        <div className={clas.genres_poster}>{getGenresNames(movie)}</div>
      </div>
    </article>
  );
};

export default PosterItem;