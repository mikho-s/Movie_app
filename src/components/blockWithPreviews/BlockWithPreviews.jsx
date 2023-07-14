import React, { useEffect } from 'react';
import clas from './blockWithPreviews.module.scss'
import MoviesPreviewRow from '../moviesPreviewRow/MoviesPreviewRow';

const BlockWithPreviews = () => {

  const previews = [
    { rowTitle: 'Netflix Original', urlRequest: '/discover/tv', additionalParams: { with_networks: 213 } },
    { rowTitle: 'Marvel', urlRequest: '/discover/movie', additionalParams: { with_companies: 420 } },
    { rowTitle: 'Popular Movies', urlRequest: 'movie/popular' },
    // { rowTitle: 'Popular TVs', urlRequest: 'tv/popular' },
    { rowTitle: 'Top Rated Movies', urlRequest: 'movie/top_rated' },
    { rowTitle: 'Top Tvs', urlRequest: 'discover/tv', additionalParams: { sort_by: 'vote_count.desc' } },
    { rowTitle: 'Upcoming', urlRequest: 'movie/upcoming' },
  ];

  return (
    <div className={clas.body}>
      {previews.map((preview, index) => {
        return <MoviesPreviewRow key={index} preview={preview} />
      })}

    </div>
  );
};


export default BlockWithPreviews;