import React, { useEffect, useState } from 'react';
import clas from './moviesPreviewRow.module.scss';
import '@style/App.scss';
import Slider from '../slider/Slider';
import { Link, } from 'react-router-dom';
import PosterItem from '../posterItem/PosterItem';
import { getPath, getTypeMed, getTypePath } from '@utils/utils';
import { useDispatch, useSelector } from 'react-redux';


const MoviesPreviewRow = ({ preview, ...props }) => {
  // const [movies, setMovies] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(7);
  const [slidesToScroll, setSlidesToScroll] = useState(5);

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesByPreview[preview.rowTitle] || []);


  const handleResize = () => {
    const windowWidth = window.innerWidth;
    let newSlidesToShow = 7;
    let newSlidesToScroll = 5;

    const breakpoints = [
      { width: 500, slidesToShow: 2, slidesToScroll: 1 },
      { width: 650, slidesToShow: 3, slidesToScroll: 1 },
      { width: 768, slidesToShow: 4, slidesToScroll: 2 },
      { width: 920, slidesToShow: 5, slidesToScroll: 3 },
      { width: 1080, slidesToShow: 6, slidesToScroll: 4 },
    ];

    for (const breakpoint of breakpoints) {
      if (windowWidth < breakpoint.width) {
        newSlidesToShow = breakpoint.slidesToShow;
        newSlidesToScroll = breakpoint.slidesToScroll;
        break;
      }
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
