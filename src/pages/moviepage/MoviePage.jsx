import React, { useEffect, useState } from 'react';
import clas from './moviePage.module.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getPromoSimpleReq, getTrailerAndVideos } from '@API/axios';
import { getSomeImages, getSomePosters, tmdbBackImageSrc, } from '@utils/utils';
import MovieDetails from '@components/moviePageComponents/MovieDetails';
import DetailsVideos from '@components/moviePageComponents/DetailsVideos';
import DetailImages from '@components/moviePageComponents/DetailImages';
import { useFetching } from 'src/hooks/useFetching';

const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState('');
  const [videos, setVideosData] = useState([]);
  const [backDropImages, setBackDropImages] = useState([]);
  const [posterImages, setPosterImages] = useState([]);
  const { id, name } = useParams();
  const location = useLocation();


  const [fetchMovieData, isLoadingMovieData, errorMovieData] = useFetching(async () => {
    const data = await getPromoSimpleReq(location.pathname);
    console.log(errorMovieData);
    setMovie(data);
  });
  const [fetchCastData, isLoadingCastData, errorCastData] = useFetching(async () => {
    const data = await getPromoSimpleReq(location.pathname + '/credits');
    console.log(errorCastData);
    setCast(data.cast);
  });
  const [fetchVideosData, isLoadingVideostData, errorVideosData] = useFetching(async () => {
    const { trailerKey, videosData } = await getTrailerAndVideos(location.pathname + '/videos');
    setTrailer(trailerKey);
    setVideosData(videosData);
    console.log(errorVideosData);
  });
  const [fetchImagesData, isLoadingImagesData, errorImagesData] = useFetching(async () => {
    const images = await getPromoSimpleReq(location.pathname + '/images');
    setBackDropImages(getSomeImages(images.backdrops, 8));
    setPosterImages(getSomePosters(images.posters, 2));
    console.log(errorImagesData);
  });




  useEffect(() => {
    // const fetchMovies = async () => {
    // const data = await getPromoSimpleReq(location.pathname);
    // setMovie(data);
    // console.log(movie);
    // const castData = await getPromoSimpleReq(location.pathname + '/credits');
    // setCast(castData.cast)
    // console.log(castData);
    // console.log(cast);
    // const { trailerKey, videosData } = await getTrailerAndVideos(location.pathname + '/videos');
    // setTrailer(trailerKey);
    // setVideosData(videosData);
    // console.log(videosData);
    // const images = await getPromoSimpleReq(location.pathname + '/images');
    // setBackDropImages(getSomeImages(images.backdrops, 8));
    // setPosterImages(getSomePosters(images.posters, 2));

    // };
    // fetchMovies();
    fetchMovieData();
    fetchCastData();
    fetchVideosData();
    fetchImagesData();

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

export default MoviePage;




// {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/YLorLVa95Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */ }