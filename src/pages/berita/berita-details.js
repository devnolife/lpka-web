import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogDetailsMain from './BeritaDetailsMain';
import Breadcrumb from '../../components/Breadcrumb/BlogBreadcrumbs';
import ScrollToTop from '../../components/ScrollTop';
import posts from '../../data/Berita.json';

import Logo from '../../assets/images/logos/logo-lpka.png';

const BeritaDetail = () => {

  const location = useLocation();
  const postURL = location.pathname.split('/');

  const post = posts.find((b) => b.id === Number(postURL[2]));

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
            postAuthorImg={post.authorImg}
            postPublishedDate={post.publishedDate}
            postTotalView={post.totalView}
          />

          <BlogDetailsMain
            postTitle={post.title}
            postImg={post.image}
            postBannerImg={post.bannerImg}
            postAuthor={post.author}
            postAuthorImg={post.authorImg}
            postPublishedDate={post.publishedDate}
            postTotalView={post.totalView}
          />
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </body>
  );
}


export default BeritaDetail;

