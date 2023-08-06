import React, { useEffect, useState } from 'react';
import clas from './movieDetails.module.scss';
import { convertStringForQuery, getYearMovie, tmdbImageSrc, tmdbMiniImageSrc } from '@utils/utils';
import Slider from '@components/slider/Slider';
import { Link } from 'react-router-dom';
import { getPromoSimpleReq } from 'src/API/axios';



const MovieDetails = ({ movie, cast, ...props }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  const [mediaType, setMediaType] = useState('');
  const [hoveredActor, setHoveredActor] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });



  console.log(cast);
  const getActors = (cast) => {
    if (cast.length > 10) {
      return cast.slice(0, 10);
    }
    return cast;
  }

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


  const handleActorMouseEnter = (actor, event) => {
    setHoveredActor(actor);
    updateCursorPosition(event);
  };

  const handleActorMouseLeave = () => {
    setHoveredActor(null);
  };

  const updateCursorPosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
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
            {/* <div className='regular_title'>Cast</div>
            <div className={clas.cast_items}>
              <Slider slidesToShow={slidesToShow} slidesToScroll={slidesToScroll}  >
                {cast.map(person => {
                  return <Link key={person.id}
                    className={clas.cast_item_body}
                    to={`/person/${person.id}`}
                  >
                    <div>
                      <img className={clas.cast_image} src={tmdbMiniImageSrc(person.profile_path)} alt="" />
                      <div className={clas.actor_name}>{person.name}</div>

                    </div>
                  </Link>
                })
                }
              </Slider>
            </div> */}
            <div className={clas.actors_title}>Actors:</div>
            <div className={clas.actors_items}>
              {getActors(cast).map(actor => {
                return <Link
                  to={`/person/${actor.id}`}
                  key={actor.id}
                  className={clas.actors_item}
                  onMouseEnter={(e) => handleActorMouseEnter(actor, e)}
                  onMouseLeave={handleActorMouseLeave}

                >{actor.name}</Link>
              })}
              {hoveredActor && (
                <div className={clas.actor_image_hover}
                  style={{ top: position.y, left: position.x }}
                >
                  <img src={tmdbMiniImageSrc(hoveredActor.profile_path)} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MovieDetails;