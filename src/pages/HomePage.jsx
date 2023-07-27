
import React, { useEffect, useState } from 'react';
import Banner from '@components/banner/Banner';
import { useFetching } from '@hooks/useFetching';
import Slider from '@components/slider/Slider';
import BlockWithPreviews from '@components/blockWithPreviews/BlockWithPreviews';
import { getPromoSimpleReq } from '@API/axios';
import { setMoviesForMainSlider } from '@store/PreviewsForHomePage';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingForSlider } from '@store/GlobalLoading';
import Skeleton from '@components/skeleton/Skeleton';




const HomePage = () => {
  // const [movies, setMovies] = useState([])

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.slider.moviesBySlider || []);
  const isGlobalLoadingMovies = useSelector((state) => state.loading.mainPromosLoading || state.loading.mainSliderLoading);


  const [fetchTrendingAll, isLoading, error] = useFetching(async () => {
    const responce = await getPromoSimpleReq('/trending/all/week');

    dispatch(setMoviesForMainSlider(responce.results));
    dispatch(setLoadingForSlider(isLoading));
  });




  useEffect(() => {
    if (movies.length === 0) {
      dispatch(setLoadingForSlider(true));
      fetchTrendingAll();
    }

  }, []);


  return (
    <div>
      {isGlobalLoadingMovies
        ? <>
          <Skeleton />
          <BlockWithPreviews />
        </>
        : <>
          <Slider slidesToShow={1} slidesToScroll={1} >
            {movies.map(movie => {
              return (<div key={movie.id} >
                <Banner movie={movie} />
              </div>)
            })}
          </Slider>
          <BlockWithPreviews />
        </>
      }
    </div>
  );
};

export default HomePage;

