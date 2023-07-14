import React from 'react';
import clas from './posterItemForSrch.module.scss';
import { Link } from 'react-router-dom';
import { genresMovie, genresTv, getTypePath, getYearMovie, tmdbImageSrcW342 } from '../../utils/utils';


const PosterItemForSrch = ({ movie }) => {



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
  return (
    <Link to={`/${getTypePath(movie)}/${movie.id}`} className={clas.item}>
      <article  >
        <img src={tmdbImageSrcW342(movie.poster_path)} alt="poster" />
        <div className={clas.description_body}>
          <div className={clas.title_poster}>{movie.title || movie.name}</div>
          <div className={clas.vote_date_poster}>
            <div className={clas.vote_poster}>{movie.vote_average}</div>
            <div className={clas.data_poster}> {getYearMovie(movie)} </div>
          </div>
          <div className={clas.genres_poster}>{getGenresNames(movie)}</div>
        </div>
      </article>
    </Link>
  );
};

export default PosterItemForSrch;