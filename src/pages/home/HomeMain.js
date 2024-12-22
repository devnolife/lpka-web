import React from 'react';
import Blog from './BlogSection';
import About from './AboutSection';
import Service from './ServiceSection';
import HomeSlider from './SliderSection';
import ScrollToTop from '../../components/ScrollTop';

const HomeMain = () => {
  return (
    <>
      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          <HomeSlider />
          <About />
          <Service />
          <Blog />
          <ScrollToTop
            scrollClassName="home react__up___scroll"
          />
        </div>
      </div>
    </>
  );
}

export default HomeMain;
