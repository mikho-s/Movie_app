import React, { useEffect, useState } from 'react';
import clas from './moviesPreviewRow.module.scss';
import '../../style/App.scss';
import Slider from '../slider/Slider';
import { getPromoSimpleReq } from '../../API/axios';
import { Link, useNavigate } from 'react-router-dom';
import PosterItem from '../posterItem/PosterItem';
import { getPath, getTypeMed, getTypePath } from '../../utils/utils';

const MoviesPreviewRow = ({ preview, ...props }) => {
  const [movies, setMovies] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(7);
  const [slidesToScroll, setSlidesToScroll] = useState(5);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPromoSimpleReq(preview.urlRequest, preview.additionalParams);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    let newSlidesToShow = 7;
    let newSlidesToScroll = 5;

    if (windowWidth < 650) {
      newSlidesToShow = 2;
      newSlidesToScroll = 1;
    } else if (windowWidth < 768) {
      newSlidesToShow = 3;
      newSlidesToScroll = 1;
    } else if (windowWidth < 920) {
      newSlidesToShow = 4;
      newSlidesToScroll = 2;
    } else if (windowWidth < 1080) {
      newSlidesToShow = 5;
      newSlidesToScroll = 3;
    } else if (windowWidth < 1440) {
      newSlidesToShow = 6;
      newSlidesToScroll = 4;
    }
    setSlidesToShow(newSlidesToShow);
    setSlidesToScroll(newSlidesToScroll);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className={clas.body}>
      <Link to={`${getTypeMed(preview.urlRequest)}${getPath(preview.additionalParams)}`}>
        <div className={clas.title_row}>{preview.rowTitle}</div>
      </Link>
      <div className={clas.content_row}>
        <Slider slidesToShow={slidesToShow} slidesToScroll={slidesToScroll}>
          {movies.map((movie, index) => {
            return (
              <Link to={`/${getTypePath(movie)}/${movie.id}`} key={index}>
                <PosterItem movie={movie} />
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MoviesPreviewRow;

// ===================================================================================================================================================
