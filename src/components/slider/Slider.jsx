

import './slider.css'
import Slick from 'react-slick';
import '@style/App.scss'


const Slider = ({ slidesMargin, slidesToShow, slidesToScroll, movies, children, ...props }) => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: slidesToScroll,
    slidesToShow: slidesToShow,
    // ...(slidesMargin !== undefined && { slidesMargin }), // Добав
  }

  return (
    <Slick {...settings} className='slider-container my-slick' >
      {children}
    </Slick>
  )
};

export default Slider;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
