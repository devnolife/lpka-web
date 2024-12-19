import React from 'react';
import HomeMain from './HomeMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import footerLogo from '../../assets/images/logos/footer-logo.png';

const HomePage = () => {
  return (
    <>
      <Header
        parentMenu='home'
        topbarEnable='enable'
      />
      <HomeMain />
      <Footer />
    </>
  );
}

export default HomePage;
