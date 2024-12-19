import React from 'react';
import { Link } from 'react-router-dom'

import courseImg1 from '../../assets/images/course/1.png';

const SingleCourseFour = (props) => {
    const { itemClass, courseID, courseImg, courseTitle, courseName, courseAuthor, courseAuthorImg, courseLesson, courseEnrolled, coursePrice, courseReview } = props;
	return(
        <div className={itemClass ? itemClass : 'inner-course'}>
            <div className="case-img">
                <Link to="#" className="cate-w">{courseName ? courseName : 'Web Design'}</Link>
                <img src={courseImg ? require(`../../assets/images/course/${courseImg}`) : require(`../../assets/images/course/${courseImg1}`)} alt="image" />
            </div>
            <div className="case-content">
                <ul className="meta-course">
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> {courseReview} review </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> {courseEnrolled ? courseEnrolled : '44'} Students </li>
                </ul>
                <h4 className="case-title">
                    <Link to={`/course/${courseID}`}>
                        {courseTitle ? courseTitle : 'The Most Complete Design Thinking Course On The Market.'}
                    </Link>
                </h4>
                <div className="react__user">
                    <img src={require(`../../assets/images/course/${courseAuthorImg}`)} alt="user" /> {courseAuthor}
                </div>
                <ul className="react-ratings">
                    <li className="react-book"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>{courseLesson ? courseLesson : '4'} Lessons</li>
                    <li className="price">{coursePrice ? coursePrice : '$34.00'}</li>
                </ul>
            </div>                                 
        </div>
	)
}

export default SingleCourseFour