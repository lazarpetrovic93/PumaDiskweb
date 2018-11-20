import React from 'react';
import Slider from "react-slick";
import {Image} from 'react-bootstrap';

const PictureSlider = (props) => {
console.log('props', props)
  const listPics = props.patike.map(n => {
    return (
        <div>
          <Image src={`${n}`} responsive />
        </div>
    )
  })



    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      pauseOnHover: true,
      focusOnSelect: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
      
    };
    return (
      <div>
        <Slider {...settings} style={{height: '280px'}}>
          {listPics}
        </Slider>
      </div>
   
    );
  }


export default PictureSlider;