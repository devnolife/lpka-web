import React from 'react';
import BeritaMain from './BeritaMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollTop';


const Berita = () => {
  return (
    <body className="blog-post-page">
      <Header
        parentMenu='blog'
        menuCategoryEnable='enable'
      />
      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <BeritaMain />
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default Berita;

