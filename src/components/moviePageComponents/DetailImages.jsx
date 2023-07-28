import React from 'react';
import clas from './detailImages.module.scss';
import Slider from '@components/slider/Slider';
import { tmdbBackImageSrc, tmdbImageSrc, tmdbImageSrcW342 } from '@utils/utils';
import { BsArrowsFullscreen } from 'react-icons/bs';


const DetailImages = ({ backImages, posterImages, ...props }) => {



  const clickItem = (image) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${image.file_path}`;

    window.open(imageUrl, '_blank');
  };
  return (
    <div>
      {backImages.length > 1
        ?
        <div className={clas.backdrops_block}>
          <div className='regular_title'>
            Backdrops
          </div>
          <div className={clas.backdrops_content}>
            <Slider slidesToShow={2} slidesToScroll={1}  >
              {backImages.map((image, index) => {
                return <div key={index}
                  // onClick={() => clickItem(image)}
                  className={clas.backdrop_item}
                  style={{
                  }}
                >
                  <img src={tmdbBackImageSrc(image.file_path)} alt="" />
                  <BsArrowsFullscreen className={clas.full_scren_btn} onClick={() => clickItem(image)}> </BsArrowsFullscreen>
                </div>
              })
              }
            </Slider>
          </div>
        </div>
        : <></>
      }

      {posterImages.length > 1
        ? <div className={clas.posters_block}>

          <div className='regular_title'>
            Posters
          </div>
          <div className={clas.posters_content}>
            <Slider slidesToShow={4} slidesToScroll={2}  >
              {posterImages.map((image, index) => {
                return <div key={index}
                  // onClick={() => clickItem(image)}
                  className={clas.poster_item}
                  style={{
                  }}
                >
                  <img src={tmdbImageSrcW342(image.file_path)} alt="" />
                  <BsArrowsFullscreen className={clas.full_scren_btn} onClick={() => clickItem(image)}> </BsArrowsFullscreen>

                </div>
              })
              }
            </Slider>
          </div>
        </div>
        : <></>
      }


    </div>
  );
};

export default DetailImages;