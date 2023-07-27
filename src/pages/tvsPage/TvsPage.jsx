import React, { useEffect, useState } from 'react';
import clas from './tvsPage.module.scss';
import { useSearchParams } from 'react-router-dom';
import { getPromoSimpleReq } from '@API/axios';
import Pagination from '@components/pagination/Pagination';
import PosterItemForSrch from '@components/posterItem/PosterItemForSrch';


const TvsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      let data;
      // if (searchParams.size === 0) {
      //   data = await getPromoSimpleReq('tv/top_rated');
      // }
      //  else {
      const allParams = Object.fromEntries(searchParams);
      console.log(allParams);
      const initialPage = Number(searchParams.get('page')) || 1;
      setPage(initialPage);
      data = await getPromoSimpleReq('discover/tv', allParams);
      // }
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
        <div className={`${clas.title_content} regular_title`}>TVs</div>
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

export default TvsPage;