import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PengumumanGridMain from './BeritaGridMain';
import ScrollToTop from '../../components/ScrollTop';

const Pengumuman = () => {
  return (
    <body class="courses-grid-page">
      <Header
        parentMenu='course'
        menuCategoryEnable='enable'
      />
      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <PengumumanGridMain />
          <ScrollToTop />
        </div>
      </div>

      <Footer />

    </body>
  );
}


export default Pengumuman;

