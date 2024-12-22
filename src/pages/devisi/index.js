import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DevisiDetailMain from './DevisiDetailMain';
import Breadcrumb from '../../components/Breadcrumb/BlogBreadcrumbs';
import ScrollToTop from '../../components/ScrollTop';
import data from '../../data/Devisi.json';

import Logo from '../../assets/images/logos/logo-lpka.png';

const Devisi = () => {
  const location = useLocation();
  const postURL = location.pathname.split('/');
  const post = data.find((b) => b.id === Number(postURL[2]));

  return (
    <body className="course-single blog-post-page blog-post-single-page">
      <Header
        parentMenu='blog'
        menuCategoryEnable='enable'
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
      />

      <div class="react-wrapper">
        <div class="react-wrapper-inner">
          <Breadcrumb
            postTitle={post.title}
            postImg={post.image}
            postBannerImg={post.bannerImg}
            postCategory={post.category}
            postAuthor={post.author}
          />
          <DevisiDetailMain konteks={post.konteks}
          />
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </body>
  );
}


export default Devisi;

