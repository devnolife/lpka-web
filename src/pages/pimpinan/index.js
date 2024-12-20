import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/index';
import InstructorMain from './InstructorMain';
import ScrollToTop from '../../components/ScrollTop';
import InstructorSection from './InstructorSection';

const Pimpinan = () => {
  return (
    <>
      <Header
        parentMenu='page'
        menuCategoryEnable='enable'
      />
      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <InstructorMain />
          <InstructorSection />
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Pimpinan;

