import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    const { postTitle, postBannerImg, postCategory, postAuthor, postAuthorImg, postPublishedDate, postTotalView } = props;

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
							<ul className="user-section">
								<li className="user">
									<span><img src={require(`../../assets/images/blog/${postAuthorImg}`)} alt="user" /></span>
									<span>{postAuthor}</span>
								</li>
								<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {postPublishedDate}</li>
								<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> {postTotalView} views</li>
							</ul>
						</div>
					</div>
				</div>
			</div>                
			</div>
	);
}

export default Breadcrumb;




