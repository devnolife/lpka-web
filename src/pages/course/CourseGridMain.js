import React , { useState }  from 'react';

import { Link } from 'react-router-dom';
import SingleCourseThree from '../../components/Course/SingleCourseThree';

import courses from '../../data/Courses.json';

const CourseGridMain = () => {

    const getInitialStateCategory = () => {
        const category = "Marketing";
        return category;
    };

    const [category, setCategory] = useState(getInitialStateCategory);

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    const getInitialStateLanguage = () => {
        const language = "English";
        return language;
    };

    const [language, setLanguage] = useState(getInitialStateLanguage);

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
    };

    const getInitialStateSkill = () => {
        const skill = "Intermediate";
        return skill;
    };

    const [skill, setSkill] = useState(getInitialStateSkill);

    const handleChangeSkill = (e) => {
        setSkill(e.target.value);
    };

    return (
        <div className="react-course-filter back__course__page_grid pb---40 pt---110">
            <div className="container pb---70"> 
                <div className="row align-items-center back-vertical-middle shorting__course mb-50">
                    <div className="col-md-2">
                        <div className="all__icons"> 
                            <div className="list__icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                            </div>
                            <div className="result-count">Filters</div>
                        </div>
                    </div>
                    <div className="col-md-10 text-right">
                        <select className="from-control category" onChange={handleChangeCategory}>
                            <option value="Marketing">All Categories</option>
                            <option value="Education">Education</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Development">Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                        </select>
                        <select className="from-control language" onChange={handleChangeLanguage}>
                            <option value="English">All Language</option>
                            <option value="English">English</option>
                            <option value="Italic">Italic</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Bangla">Bangla</option>
                            <option value="Urdu">Urdu</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                        <select className="from-control price">
                            <option>All Prices</option>
                            <option>Free Courses</option>
                            <option>Paid Courses</option>
                            <option>Subscribers Only</option>
                        </select>
                        <select className="from-control skill" onChange={handleChangeSkill}>
                            <option value="Intermediate">All Skills</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Advanced</option>
                        </select>
                    </div>
                </div>
                <div className="row align-items-center back-vertical-middle shorting__course2 mb-50">
                    <div className="col-md-6">
                        <div className="all__icons"> 
                            <div className="result-count">We found 104 courses available for you</div>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">                                
                        <select className="from-control">
                            <option>Sort by: Default</option>
                            <option>Sort by popularity</option>
                            <option>Sort by average rating</option>
                            <option>Sort by lates</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                        </select>
                    </div>
                </div>                                                  
                <div className="row"> 
                    {courses.filter(course => {
                        return course.name === category || course.language === language || course.type === skill;
                    }).map((data, index) => {
                        return (  
                            <div key={index} className="col-lg-4">
                            { 
                                <SingleCourseThree
                                    courseID={data.id}
                                    courseImg= {`${data.image}`}
                                    courseTitle= {data.title}
                                    courseName= {data.name}
                                    courseAuthor= {data.author}
                                    courseType= {data.type}
                                    courseLesson= {data.lesson}
                                    courseDuration= {data.duration}
                                    courseEnrolled= {data.enrolled}
                                    coursePrice= {data.price}
                                    courseReview= {data.review}
                                />
                            }
                            </div>
                        )
                    })}
                </div>
                <ul className="back-pagination pt---20">
                    <li><Link to="#">1</Link></li>
                    <li><Link to="#">2</Link></li>
                    <li className="back-next"><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default CourseGridMain;