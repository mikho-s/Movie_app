import React, { useEffect, useState } from 'react';
import clas from './banner.module.scss'
import Buttons from '@components/UI/buttons/Buttons';
import { tmdbBackImageSrc, tmdbBackImageSrcW1280 } from '@utils/utils';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Banner = ({ movie }) => {

  const isGlobalLoadingMovies = useSelector((state) => state.loading.mainPromosLoading || state.loading.mainSliderLoading);


  const cutDescrip = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + '...' : string;
  }


  const loadSliderImg = (path) => {
    if (isGlobalLoadingMovies) {
      return tmdbBackImageSrcW1280(path)
    } else {
      return tmdbBackImageSrc(path)

    }
  }



  return (
    <div className={clas.main}
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        backgroundImage: `url(${loadSliderImg(movie.backdrop_path)})`,
        backgroundPosition: "center center",
      }}>
      <div className={clas.baner_content}>
        <h1 className={clas.baner_title}> {movie.title || movie.name}</h1>
        <div className={clas.baner_btns}>
          <Link to={`${movie.media_type}/${movie.id}`}>
            <Buttons >PLAY</Buttons>
          </Link>
          {/* <Buttons >+ My List</Buttons> */}
        </div>
        <div className={clas.baner_description}>
          {movie.overview ? cutDescrip(movie.overview, 150) : movie.overview}
          {/* !!!!!!!!!!!!!!!!!!!!!!!!! */}
        </div>
      </div>
    </div>
  );
};

export default Banner;