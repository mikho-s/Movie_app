import React, { useEffect, useState } from 'react';
import clas from './searchResult.module.scss';
import { getSearchReq } from '../../API/axios';


const SearchResult = ({ query }) => {
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    const fetchMovies = async () => {
      if (/^[a-zA-Z\s]+$/.test(query)) {
        const data = await getSearchReq(query);
        console.log(data);
      }
    };
    fetchMovies();

    setSearchText(query);

  }, [query])


  return (
    <div className={clas.result_container}>
      <div className={clas.movie_result}>{query} </div>
      <div className={clas.tv_result}>{query}</div>

    </div>
  );
};

export default SearchResult;