import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import ContactMain from './ContactMain';
import ScrollToTop from '../../components/ScrollTop';

import Logo from '../../assets/images/logos/logo2.png';

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

