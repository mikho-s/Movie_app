import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getPromoSimpleReq } from '@API/axios';
import PosterItemForSrch from '@components/posterItem/PosterItemForSrch';
import clas from './moviesPage.module.scss';
import Pagination from '@components/pagination/Pagination';
import MySelect from '@components/UI/select/MySelect';
import { genresMovie, genresTv } from '@utils/utils';


const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortOption, setSortOption] = useState('popularity.desc');

  const [genres, setGenres] = useState([]);

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const location = useLocation();
  const initialPath = location.pathname;
  let allGenres, mediaType;
  console.log(initialPath);
  if (initialPath === "/movies") {
    mediaType = 'movie'
    allGenres = genresMovie;
  } else if (initialPath === "/tvs") {
    mediaType = 'tv'
    allGenres = genresTv;
  }


  useEffect(() => {
    const fetchMovies = async () => {

      let data;
      const allParams = Object.fromEntries(searchParams);
      console.log(allParams);
      console.log('SECOND ');

      const initialPage = Number(searchParams.get('page')) || 1;
      setPage(initialPage);
      data = await getPromoSimpleReq(`discover/${mediaType}`, allParams);
      console.log(data);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();

    const genreParams = searchParams.get('with_genres');
    const genreIds = genreParams ? genreParams.split(',').map(genre => genre.trim()) : [];
    const selectedGenres = genreIds
      .filter(id => allGenres.some(genre => genre.id === Number(id)))
      .map(id => {
        const genre = allGenres.find(genre => genre.id === Number(id));
        return { value: genre.id, label: genre.name };
      });
    setGenres(selectedGenres);

  }, [searchParams, page, sortOption, mediaType]);


  const handlePageChange = (newPage) => {
    setPage(newPage);
    handleParamChange('page', newPage);
  };

  const handleSortChange = (sort) => {
    handleParamChange('sort_by', sort);
  };

  const handleGenreChange = (genre) => {
    handleParamChange('with_genres', genre);
  };


  const handleParamChange = (param, value) => {
    const updatedSearchParams = { ...Object.fromEntries(searchParams), [param]: value };
    if (updatedSearchParams[param] === '') {
      delete updatedSearchParams[param];
    }
    if (Object.keys(updatedSearchParams).length === 0) {
      setSearchParams('');
    } else {
      setSearchParams(updatedSearchParams);
    }
  };

  return (
    <div className='container'>
      <div className={clas.content_block}>
        <div className={clas.header_content}>
          <div className={`${clas.title_content} regular_title`}>Movies</div>
          <div className={clas.searchOptions}>

            <MySelect
              isMulti={false}
              placeholder={'Sort by'}
              // value={sortOption}
              onChange={sort => handleSortChange(sort)}
              options={[
                { value: "popularity.desc", label: 'Popularity' },
                { value: "vote_count.desc", label: 'Rating' },
              ]}
            />
            <MySelect
              placeholder={'Select genres'}
              isMulti={true}
              value={genres}
              onChange={genre => handleGenreChange(genre)}
              options={allGenres.map(genre => ({ value: genre.id, label: genre.name }))}
              minWidth={'300px'}
              maxWidth={'500px'}
            />
          </div>
        </div>
        <div className={clas.movies_block}>
          {movies.map((movie) => (
            <PosterItemForSrch movie={movie} key={movie.id} />
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default MoviesPage;

