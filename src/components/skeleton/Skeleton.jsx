import React, { useEffect, useState } from 'react';
import clas from './skeleton.module.scss'
import { useSelector } from 'react-redux';
import Slider from '@components/slider/Slider';

const Skeleton = () => {
  const [slidesToShow, setSlidesToShow] = useState(7);
  const [slidesToScroll, setSlidesToScroll] = useState(5);
  const previews = useSelector((state) => state.previews);

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


  const renderSkeletonItem = () => {
    return (<div className={clas.skeleton_promo_item}>

      <div className={clas.promo_item_bg}>
      </div>
    </div>
    );
  };

  const skeletonItems = Array(10).fill(renderSkeletonItem());

  return (
    <>
      <div className={clas.main}>
        <div className={clas.baner_content}>
          <div className={clas.baner_title}></div>
          <div className={clas.baner_btns}>
            <span className={clas.baner_btn}></span>
            <span className={clas.baner_btn}></span>
          </div>
          <div className={clas.baner_description}></div>
        </div>
      </div>
      <div className={clas.previews_block}>
        {previews.map((preview, index) => {
          return <div className={clas.previews_item} key={preview.rowTitle + index}>
            <div className={clas.previews_title} >{preview.rowTitle}  </div>
            <Slider slidesToShow={slidesToShow} slidesToScroll={slidesToScroll}>
              {skeletonItems}
            </Slider>

          </div>

        })}
      </div>
    </>
  );
};

export default Skeleton;