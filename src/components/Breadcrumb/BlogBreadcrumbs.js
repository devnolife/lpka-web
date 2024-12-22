import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  const { postTitle, postBannerImg, postCategory } = props;

  return (
    <div className="react-breadcrumbs single-page-breadcrumbs">
      <div className="breadcrumbs-wrap">
        <img className="desktop" src={require(`../../assets/images/blog/${postBannerImg}`)} alt="Breadcrumbs" />
        <img className="mobile" src={require(`../../assets/images/blog/${postBannerImg}`)} alt="Breadcrumbs" />
        <div className="breadcrumbs-inner">
          <div className="container">
            <div className="breadcrumbs-text">
              <Link to="#" className="cate">{postCategory}</Link>
              <h1 className="breadcrumbs-title">{postTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;




