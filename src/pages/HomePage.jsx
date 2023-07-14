
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import { useFetching } from '../hooks/useFetching';
import RequestsService from '../API/Requests';
import Slider from '../components/slider/Slider';
import BlockWithPreviews from '../components/blockWithPreviews/BlockWithPreviews';




const HomePage = () => {
  const [movies, setMovies] = useState([])

  const [fetchTrendingAll, isLoading, error] = useFetching(async () => {
    const responce = await RequestsService.getTrendingAll();
    setMovies(responce.data.results);
  });


  useEffect(() => {
    fetchTrendingAll()
  }, [])


  return (
    <div>
      {/* <Header /> */}
      {movies.length
        ? <Slider slidesToShow={1} slidesToScroll={1} >
          {movies.map((movie, index) => {
            return (<div key={index} >
              <Banner movie={movie} />
            </div>)
          })}
        </Slider>
        : <div>Loading...</div>
      }
      <BlockWithPreviews />
    </div>
  );
};

export default HomePage;

