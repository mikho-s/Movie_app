import React, { useEffect, useState } from 'react';
import clas from './banner.module.scss'
import Buttons from '../UI/buttons/Buttons';
import { tmdbBackImageSrc } from '../../utils/utils';
import { Link } from 'react-router-dom';



const Banner = ({ movie }) => {

  const cutDescrip = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  const handlePlayClick = () => {
    // Выполните нужные вам действия при нажатии на кнопку PLAY
    // Например, передайте информацию о компоненте в другой компонент или вызовите функцию с этой информацией
    console.log('Нажата кнопка PLAY');
    console.log('Информация о компоненте:', movie);
  };

  return (
    <div className={clas.main}
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        backgroundImage: `url(${tmdbBackImageSrc(movie.backdrop_path)})`,
        backgroundPosition: "center center",
      }}>
      <div className={clas.baner_content}>
        <h1 className={clas.baner_title}> {movie.title || movie.name}</h1>
        <div className={clas.baner_btns}>
          <Link to={`${movie.media_type}/${movie.id}`}>
            <Buttons onClick={handlePlayClick}>PLAY</Buttons>
          </Link>
          <Buttons >+ My List</Buttons>
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