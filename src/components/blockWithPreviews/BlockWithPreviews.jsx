import React, { useEffect } from 'react';
import clas from './blockWithPreviews.module.scss'
import MoviesPreviewRow from '../moviesPreviewRow/MoviesPreviewRow';
import { useFetching } from '../../hooks/useFetching';
import { getPromoSimpleReq } from '../../API/axios';
import { setMoviesForPreview } from '../../store/PreviewsForHomePage';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingForPromos } from '../../store/GlobalLoading';

const BlockWithPreviews = () => {

  const isGlobalLoadingMovies = useSelector((state) => state.loading.mainPromosLoading || state.loading.mainSliderLoading);
  const previews = useSelector((state) => state.previews);


  // const previews = [
  //   { rowTitle: 'Netflix Original', urlRequest: '/discover/tv', additionalParams: { with_networks: 213 } },
  //   { rowTitle: 'Marvel', urlRequest: '/discover/movie', additionalParams: { with_companies: 420 } },
  //   { rowTitle: 'Popular Movies', urlRequest: 'movie/popular' },
  //   // { rowTitle: 'Popular TVs', urlRequest: 'tv/popular' },
  //   { rowTitle: 'Top Rated Movies', urlRequest: 'movie/top_rated' },
  //   { rowTitle: 'Top Tvs', urlRequest: 'discover/tv', additionalParams: { sort_by: 'vote_count.desc' } },
  //   { rowTitle: 'Upcoming', urlRequest: 'movie/upcoming' },
  // ];


  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesByPreview || []);



  const [fetchMainPromos, isLoading, error] = useFetching(async () => {
    for (const preview of previews) {
      const data = await getPromoSimpleReq(preview.urlRequest, preview.additionalParams);
      dispatch(setMoviesForPreview(preview.rowTitle, data.results));
    }
    dispatch(setLoadingForPromos(isLoading));
  });



  useEffect(() => {
    if (previews.length !== Object.keys(movies).length) {
      dispatch(setLoadingForPromos(true));
      fetchMainPromos();
    }
  }, []);


  return (
    <div className={clas.body}>
      {isGlobalLoadingMovies ? (
        <></>
      ) : (
        previews.map((preview, index) => {
          return <MoviesPreviewRow key={index} preview={preview} />;
        })
      )}
    </div>
  );
};


export default BlockWithPreviews;