import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BeritaGridMain from './BeritaGridMain';
import ScrollToTop from '../../components/ScrollTop';

const Berita = () => {
  return (
    <body class="courses-grid-page">
      <Header
        parentMenu='course'
        menuCategoryEnable='enable'
      />
      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <BeritaGridMain />
          <ScrollToTop />
        </div>
      </div>

      <Footer />

    </body>
  );
}


export default Berita;

