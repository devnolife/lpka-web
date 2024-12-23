import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactMain from './ContactMain';
import ScrollToTop from '../../components/ScrollTop';


const Komplen = () => {
  return (
    <>
      <Header
        parentMenu='contact'
        menuCategoryEnable='enable'
      />

      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <ContactMain />
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Komplen;

