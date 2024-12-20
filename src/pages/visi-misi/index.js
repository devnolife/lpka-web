import React from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import ScrollToTop from '../../components/ScrollTop';
import AboutMain from './AboutMain';

import Logo from '../../assets/images/logos/logo2.png';

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
