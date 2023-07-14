import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getPromoSimpleReq } from '../../API/axios';
import PosterItemForSrch from '../../components/posterItem/PosterItemForSrch';
import clas from './moviesPage.module.scss';
import Pagination from '../../components/pagination/Pagination';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      let data;

      const allParams = Object.fromEntries(searchParams);
      const initialPage = Number(searchParams.get('page')) || 1;
      setPage(initialPage);
      data = await getPromoSimpleReq('discover/movie', allParams);
      console.log(data);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [searchParams, page]);


  const handlePageChange = (newPage) => {
    setPage(newPage);
    const updatedSearchParams = { ...Object.fromEntries(searchParams), page: newPage };
    setSearchParams(updatedSearchParams);
  };

  return (
    <div className='container'>
      <div className={clas.content_block}>
        <div className={`${clas.title_content} regular_title`}>Movies</div>
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

