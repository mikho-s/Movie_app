import React, { useEffect, useState } from 'react';
import clas from './searchResult.module.scss';
import { getSearchReq } from '@API/axios';
import SearchItem from './SearchItem';


const SearchResult = ({ query, onClick }) => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])


  useEffect(() => {
    let timer;

    const fetchMovies = async () => {
      if (/^[a-zA-Z\s]+$/.test(query)) {
        const [movies, tvShows] = await getSearchReq(query);
        setMovies(movies)
        setTvShows(tvShows)
        console.log(movies);
        console.log(tvShows);
      }
    };

    if (query.length >= 2) {
      timer = setTimeout(fetchMovies, 500);
    }

    return () => {
      clearTimeout(timer);
    };


  }, [query])


  return (
    <div className={clas.result_container}>
      <div className={clas.movie_result}>
        <div className={clas.title_result}>Movies result</div>
        {movies && movies.map(movie => <SearchItem key={movie.id} movie={movie} onClick={onClick} />)}
        {movies.length == 0
          ? <div className={clas.no_result}> No results</div>
          : <></>
        }
      </div>
      <div className={clas.tv_result}>
        <div className={clas.title_result}>Tvs result</div>
        {tvShows && tvShows.map(tv => <SearchItem key={tv.id} movie={tv} onClick={onClick} />)}
        {tvShows.length == 0
          ? <div className={clas.no_result}> No results</div>
          : <></>
        }
      </div>


    </div>
  );
};

export default SearchResult;