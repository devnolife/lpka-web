import React from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';
import AboutMain from './AboutMain';

const VisiMisi = () => {

  return (
    <>
      <Header
        parentMenu='page'
        menuCategoryEnable='enable'
      />
      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <AboutMain />
          <ScrollToTop />
        </div>
      </div>
      <FooterTwo />
    </>
  );
}

export default VisiMisi;
