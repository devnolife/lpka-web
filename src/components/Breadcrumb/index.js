import React from 'react';
import { Link } from 'react-router-dom';

import breadcrumbsImg from '../../assets/images/breadcrumbs/1.jpg'

const Breadcrumb = (props) => {
	const { pageTitle } = props;

	return (
		<div className="react-breadcrumbs">
			<div className="breadcrumbs-wrap">
				<img className="desktop" src={breadcrumbsImg} alt="Breadcrumbs" />
				<img className="mobile" src={breadcrumbsImg} alt="Breadcrumbs" />
				<div className="breadcrumbs-inner">
					<div className="container">
						<div className="breadcrumbs-text">
							<h1 className="breadcrumbs-title">{pageTitle ? pageTitle : 'BreadCrumbs'}</h1>
							<div className="back-nav">
								<ul>
									<li><Link to="/">Home</Link></li>
									<li>{pageTitle ? pageTitle : 'BreadCrumbs'}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>                
		</div>
	);
}

export default Breadcrumb;




