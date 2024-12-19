import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import sliderImg1 from "../../assets/images/slider/3.jpg";
import sliderImg2 from "../../assets/images/slider/4.JPG";
import sliderImg11 from "../../assets/images/slider/11.jpg";
import sliderImg12 from "../../assets/images/slider/12.jpg";

const HomeSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    margin: 0,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,// 1 minute in milliseconds
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <>
      <div className="react-slider-part">
        <ModalVideo channel='youtube' isOpen={isOpen} videoId='e5Hc2B50Z7c' onClose={() => { openModal(); }} />
        <div className="home-sliders home2">
          <Slider {...sliderSettings}>
            <div className="single-slide">
              <div className="slider-img">
                <img
                  className="desktop"
                  src={sliderImg1}
                  style={imageStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                <img
                  className="mobile"
                  src={sliderImg11}
                  alt="Slider Image 1"
                  style={imageStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div className="container">
                <div className="slider-content">
                  <div className="content-part">
                    <span className="slider-pretitle wow animate__fadeInUp" data-wow-duration="1s" style={{ fontSize: '24px' }}>Kualitas Kehidupan Sosial yang Hebat</span>
                    <h2 className="slider-title wow animate__fadeInUp" data-wow-duration="1s" style={{ fontSize: '44px' }}>
                      LPKA UNISMUH MAKASSAR
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="slider-img">
                <img
                  className="desktop"
                  src={sliderImg2}
                  alt="Slider Image 1"
                  style={imageStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                <img
                  className="mobile"
                  src={sliderImg12}
                  alt="Slider Image 1"
                  style={imageStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div className="container">
                <div className="slider-content">
                  <div className="content-part">
                    <span className="slider-pretitle wow animate__fadeInUp" data-wow-duration="3s" style={{ fontSize: '24px' }}>Kualitas Kehidupan Sosial yang Hebat</span>
                    <h2 className="slider-title wow animate__fadeInUp" data-wow-duration="1s" style={{ fontSize: '44px' }}>
                      LPKA-UNISMUH MAKASSAR
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
