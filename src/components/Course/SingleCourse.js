import React from 'react';
import { Link } from 'react-router-dom'

import courseImg1 from '../../assets/images/course/1.png';

const SingleCourse = (props) => {
    const { itemClass, courseID, courseImg, courseTitle, courseName, courseLesson, courseEnrolled, coursePrice } = props;
	return(
        <div className={itemClass ? itemClass : 'course__item mb-30'}>
            <div className="course__thumb">
                <Link to={`/course/${courseID}`}>
                    <img src={courseImg ? require(`../../assets/images/course/${courseImg}`) : require(`../../assets/images/course/${courseImg1}`)} alt="image" />
                </Link>
            </div>
            <div className="course__inner">
                <ul>
                    <li>{courseName ? courseName : 'UX Design'}</li>
                    <li>{courseLesson ? courseLesson : '4'} Lessons</li>
                </ul>
                <h3 className="react-course-title">
                    <Link to={`/course/${courseID}`}>
                        {courseTitle ? courseTitle : 'Dave conservatoire is the Entirely free online.'}
                    </Link>
                </h3>
                <div className="course__card-icon d-flex align-items-center">
                    <div className="course__card-icon--1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <span>{courseEnrolled ? courseEnrolled : '77'} Students</span>
                    </div>                                            
                    <div className="react__user">
                        {coursePrice ? coursePrice : '$68.00'}
                    </div>
                </div>
            </div>                                    
        </div>
	)
}

export default SingleCourse