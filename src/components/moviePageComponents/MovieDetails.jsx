import React, { useEffect, useState } from 'react';
import clas from './movieDetails.module.scss';
import { convertStringForQuery, getYearMovie, tmdbImageSrc, tmdbMiniImageSrc } from '../../utils/utils';
import Slider from '../slider/Slider';
import { Link } from 'react-router-dom';



const MovieDetails = ({ movie, cast, ...props }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  const [mediaType, setMediaType] = useState('');


  console.log(movie);

  useEffect(() => {

    if (movie.release_date) {
      setMediaType('movies');
    } else {
      setMediaType('tvs');
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [movie.release_date]);


  const handleResize = () => {
    const windowWidth = window.innerWidth;
    let newSlidesToShow = 5;
    let newSlidesToScroll = 3;

    if (windowWidth < 600) {
      newSlidesToShow = 4;
      newSlidesToScroll = 2;
      // } else if (windowWidth < 801) {
      //   newSlidesToShow = 4;
      //   newSlidesToScroll = 2;
    }
    setSlidesToShow(newSlidesToShow);
    setSlidesToScroll(newSlidesToScroll);
  };

  const clickItem = (person) => {
    console.log(person);
  };

  return (
    <div>
      <div className={clas.poster_details}>
        <div className={clas.poster}>
          <img className={clas.poster_img} src={tmdbImageSrc(movie.poster_path)} alt="" />
        </div>
        <div className={clas.movie_details}>
          <h1 className={clas.name_title}>{movie.title || movie.original_title || movie.name}</h1>
          <div className={clas.time_year_rate_block}>
            <div className={clas.vote_average}>{movie.vote_average}</div>
            <div className={clas.runtime}>{movie.runtime} min.</div>
            <div className={clas.year_movie}>{getYearMovie(movie)} </div>
          </div>
          <div className={clas.genres}>
            {movie.genres.map(genre =>
              <Link
                // to={`/${mediaType}/${convertStringForQuery(genre.name)}`}
                to={{
                  pathname: `/${mediaType}`,
                  search: `?with_genres=${genre.id}`
                }}
                key={genre.id}
                className={clas.genr}>
                {genre.name}</Link>
            )}
          </div>
          <div className={clas.overview}>{movie.overview}</div>
          <div className={clas.cast_block}>
            <div className='regular_title'>Cast</div>
            <div className={clas.cast_items}>
              <Slider slidesToShow={slidesToShow} slidesToScroll={slidesToScroll}  >
                {cast.map(person => {
                  return <Link key={person.id}
                    className={clas.cast_item}
                    to={`/person/${person.id}`}
                  >
                    <img src={tmdbMiniImageSrc(person.profile_path)} alt="" />
                    <div className={clas.actor_name}>{person.name}</div>
                  </Link>
                })
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieDetails;