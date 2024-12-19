import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    const { courseName, courseTitle, courseBannerImg, courseAuthor, courseAuthorImg, courseLesson, courseEnrolled } = props;

	return (
		<div className="react-breadcrumbs single-page-breadcrumbs">
			<div className="breadcrumbs-wrap">
				<img className="desktop" src={require(`../../assets/images/course/${courseBannerImg}`)} alt={courseTitle}/>
				<img className="mobile" src={require(`../../assets/images/course/${courseBannerImg}`)} alt={courseTitle}/>
				<div className="breadcrumbs-inner">
					<div className="container">
						<div className="breadcrumbs-text">
							<Link to="#" className="cate">{courseName}</Link>
							<h1 className="breadcrumbs-title">{courseTitle}</h1>
							<ul className="user-section">
								<li className="user">
									<span><img src={require(`../../assets/images/course/${courseAuthorImg}`)}alt="user" /></span>
									<span>{courseAuthor}</span>
								</li>
								<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> {courseLesson} Lessons</li>
								<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> {courseEnrolled} Students</li>
							</ul>
						</div>
					</div>
				</div>
			</div>                
		</div>
	);
}

export default Breadcrumb;




