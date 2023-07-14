import React, { useEffect, useState } from 'react';
import clas from './tvSeriesPage.module.scss';

import { useLocation, useParams } from 'react-router-dom';
import { getPromoSimpleReq, getTrailerAndVideos } from '../../API/axios';
import { getSomeImages, getSomePosters, tmdbBackImageSrc } from '../../utils/utils';
import MovieDetails from '../../components/moviePageComponents/MovieDetails';
import DetailsVideos from '../../components/moviePageComponents/DetailsVideos';
import DetailImages from '../../components/moviePageComponents/DetailImages';

const TvSerialPage = () => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState('');
  const [videos, setVideosData] = useState([]);
  const [backDropImages, setBackDropImages] = useState([]);
  const [posterImages, setPosterImages] = useState([]);
  const { id, name } = useParams();
  const location = useLocation();


  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPromoSimpleReq(location.pathname);
      setMovie(data);
      // console.log(movie);
      const castData = await getPromoSimpleReq(location.pathname + '/credits');
      // console.log(castData);
      setCast(castData.cast)
      // console.log(cast);
      const { trailerKey, videosData } = await getTrailerAndVideos(location.pathname + '/videos');
      // console.log(videosData);
      setTrailer(trailerKey);
      setVideosData(videosData);
      const images = await getPromoSimpleReq(location.pathname + '/images');
      // console.log(images);
      setBackDropImages(getSomeImages(images.backdrops, 8));
      setPosterImages(getSomePosters(images.posters, 15));

    };
    fetchMovies();

  }, []);

  return (
    <div>
      <div className={clas.description_content}>
        {/* {console.log(movie)} */}
        {Object.keys(movie).length > 0
          ? <div>
            <div className={clas.main_image} >
              <div className={clas.block_image}>
                <img className={clas.main_img} src={tmdbBackImageSrc(movie.backdrop_path)} alt="" />
                <div className={clas.shadow_image}></div>
              </div>
            </div>
            <div className={`${clas.movie_info} container`}>
              <MovieDetails movie={movie} cast={cast} />
              <DetailsVideos trailer={trailer} videos={videos} />
              <DetailImages backImages={backDropImages} posterImages={posterImages} />
            </div>
          </div>
          : <div>LOADING.................</div>
        }
      </div >
    </div >
  );
};

export default TvSerialPage;