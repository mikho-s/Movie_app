import React from 'react';
import clas from './searchResult.module.scss';
import { getTypePath, tmdbImageSrcW92 } from '../../utils/utils';
import { Link } from 'react-router-dom';

const SearchItem = ({ movie, onClick }) => {


  return (
    <Link
      to={`/${getTypePath(movie)}/${movie.id}`}
      className={clas.search_item_block}
      onClick={onClick}
    >
      <img className={clas.item_poster_img} src={tmdbImageSrcW92(movie.poster_path)} alt="" />
      <div className={clas.item_title}>{movie.title || movie.original_title || movie.name}</div>
    </Link>
  );
};

export default SearchItem; 