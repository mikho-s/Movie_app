import React from 'react';
import clas from './detailsVideos.module.scss';
import Slider from 'react-slick';


const DetailsVideos = ({ trailer, videos, ...props }) => {
  return (
    <div>
      <div className={clas.trailer_block}>
        <div className='regular_title'>
          Trailer
        </div>
        <iframe className={clas.ifame_trailer}
          width="100%"
          src={`https://www.youtube.com/embed/${trailer}`}
          title="YouTube video player"
        ></iframe>
      </div>
      <div className={clas.videos_block}>
        <div className='regular_title'>
          Videos
        </div>
        <div className={clas.videos_items}>
          <Slider slidesToShow={2} slidesToScroll={1}>
            {videos.map(video => {
              return <iframe key={video.id}
                className={clas.ifame_video}
                width="100%"
                src={`https://www.youtube.com/embed/${video.key}`}
                title="YouTube video player"
              >
              </iframe>
            })
            }
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default DetailsVideos;