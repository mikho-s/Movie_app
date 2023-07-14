import React, { useEffect, useState } from 'react';
import clas from './personPage.module.scss';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getPromoSimpleReq } from '../../API/axios';
import { genresMovie, genresTv, getPath, getYearMovie, tmdbImageSrc } from '../../utils/utils';
import PosterItem from '../../components/posterItem/PosterItem';
import { tmdbImageSrcW342 } from '../../utils/utils';
import PosterItemForSrch from '../../components/posterItem/PosterItemForSrch';


const PersonPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [personData, setPersonData] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [showMovies, setShowMovies] = useState([]);
  const [page, setPage] = useState(1);
  const countMedia = 15;

  // фильмов 134
  // тв 42

  // useEffect(() => {
  //   setShowMovies(mediasSorted.slice(0, countMedia));
  // }, [mediasSorted]);


  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPromoSimpleReq(location.pathname);
      setPersonData(data);

      const fullData = await getPromoSimpleReq(location.pathname + '/combined_credits');
      const films = fullData.cast.filter(movie => movie.poster_path !== null);
      setAllMovies(films);

      const mediasSorted = films.sort((a, b) => {
        const dateA = a.media_type === 'movie' ? new Date(a.release_date) : new Date(a.first_air_date);
        const dateB = b.media_type === 'movie' ? new Date(b.release_date) : new Date(b.first_air_date);
        return dateB - dateA;
      });

      setShowMovies(mediasSorted.slice(0, countMedia));
    };

    fetchMovies();
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * countMedia;
    const endIndex = nextPage * countMedia;
    const nextMovies = allMovies.slice(startIndex, endIndex);
    setShowMovies(prevMovies => [...prevMovies, ...nextMovies]);
    setPage(nextPage);
  };

  useEffect(() => {
    const initialShowMovies = allMovies.slice(0, countMedia);
    setShowMovies(initialShowMovies);
  }, [allMovies]);

  // const getReleaseDate = (media) => {
  //   const date = media.media_type === 'movie' ? new Date(media.release_date) : new Date(media.first_air_date);
  //   return date.getTime();
  // };




  return (
    <div className='container'>
      <div className={clas.person_details_block}>
        <div className={clas.person_image}>
          <img className={clas.poster_img} src={tmdbImageSrc(personData.profile_path)} alt="" />
        </div>
        <div className={clas.person_info}>
          <div className={`${clas.person_name} `}>{personData.name}</div>
          <div className={clas.person_birthday}>{personData.birthday}</div>
          <div className={clas.person_city_brd}>{personData.place_of_birth}</div>
          <div className={clas.person_biography}>{personData.biography}</div>
        </div>
      </div>
      <div className={clas.content_block}>
        <div className={`${clas.title_content} regular_title`}> Movies</div>
        <div className={clas.movies_block}>
          {showMovies.map((movie, index) => {
            return (
              <PosterItemForSrch movie={movie} key={movie.id} />
            );
          })}
        </div>
        <div className={clas.load_btn} onClick={loadMore}> LOAD MORE</div>
      </div>
    </div>
  );
};

export default PersonPage;