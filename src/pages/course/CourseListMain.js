import React  from 'react';
import { Link } from 'react-router-dom';
import CourseSidebarPart from './CourseSidebar'
import SingleCourseList from '../../components/Course/SingleCourseList';

import courses from '../../data/Courses.json';

const CourseListMain = () => {

    return (
        <div className="react-course-filter back__course__page_grid back__course__page_grid_left  back__course__page_list_left pb---40 pt---100">
            <div className="container pb---70">
                <div className="row">
                    <div className="col-lg-8"> 
                        <div className="row align-items-center back-vertical-middle shorting__courses3">
                            <div className="col-md-6">
                                <div className="all__icons">
                                    <div className="grid__icons">
                                        <Link to="/course-sidebar" className="grid__icons_inner">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </Link>
                                        <div className="list__icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
                                        </div>
                                    </div>                                            
                                    <div className="result-count">We found 104 courses available for you</div>
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                <select className="from-control">
                                    <option>Default sorting</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by lates</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                        <div className="row react-grid react-list"> 
                            {courses.map((data, index) => {
                                return (    
                                    <div key={index} className="col-lg-12">
                                    { 
                                        <SingleCourseList
                                            courseID={data.id}
                                            courseImg= {`${data.image}`}
                                            courseTitle= {data.title}
                                            courseName= {data.name}
                                            courseAuthor= {data.author}
                                            courseAuthorImg= {`${data.authorImg}`}
                                            courseLesson= {data.lesson}
                                            courseDuration= {data.duration}
                                            courseEnrolled= {data.enrolled}
                                            coursePrice= {data.price}
                                            courseReview= {data.review}
                                        />
                                    }
                                    </div>
                                )
                            }).slice(0, 6)} 
                        </div>
                
                        <ul className="back-pagination pt---20">
                            <li><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li className="back-next"><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">                                                                         
                        <CourseSidebarPart />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default CourseListMain;