import React from 'react';
import { Link } from 'react-router-dom';

import courses from '../../data/Courses.json';

const Course = () => {

    return (
        <div className="react_featured_online pt---100 pb---110">
            <div className="container"> 
                <div className="react__title__section-all">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6 className="wow animate__fadeInUp" data-wow-duration="0.3s">Education for Everyone</h6>
                            <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.5s">Featured Online Courses</h2>
                        </div>                                
                    </div>                            
                </div>                       
                <div className="row pt---30">
                    {courses.map((data, index) => {
                        return (
                            <div key={index} className="col-md-6 wow animate__fadeInUp" data-wow-duration="0.3s">
                                {
                                    <div className="item__inner">
                                        <div className="icon">
                                            <img src={require(`../../assets/images/course/${data.image}`)} alt="Icon image" />
                                        </div>
                                        <div className="react-content">
                                            <h5 className="price">{data.price}</h5>
                                            <h3><Link to={`/course/${data.id}`}>{data.title}</Link></h3>
                                            <ul className="react-lessones">
                                                <li className="react-book"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> {data.lesson} Lessons</li>
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> {data.enrolled} Students </li>
                                            </ul>
                                        </div> 
                                    </div>
                                }

                            </div>
                            )
                        }).slice(10, 16)
                    }                 
                </div>
                <div className="text-center">
                    <Link to="/course" className="border-btns"> View All Course <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                </div>
            </div>
        </div>
    );
}

export default Course;