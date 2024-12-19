import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 

import countIcon1 from '../../assets/images/profile/2.png'
import countIcon2 from '../../assets/images/profile/3.png'
import countIcon3 from '../../assets/images/profile/4.png'

import courses from '../../data/Courses.json';
import instructors from '../../data/Instructors.json';

const InstructorDetailsMain = () => {
    const location = useLocation();
    const postURL = location.pathname.split('/'); 
    
    const instructor = instructors.find((b) => b.id === Number(postURL[2]));

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 28,
            countTitle: 'Foreign followers',
            countSubtext: 'k',
            countIcon: countIcon1,
        },
        {
            countNum: 10,
            countTitle: 'Classes complete',
            countSubtext: 'k',
            countIcon: countIcon2,
        },
        {
            countNum : 208,
            countTitle: 'Students enrolled',
            countSubtext: 'k',
            countIcon: countIcon3,
        }

    ];

    return (
        <>
            <div className="profile-top back__course__area pt---120 pb---90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={require(`../../assets/images/instructors/${instructor.image}`)} alt={instructor.name} />
                            <Link to="#" className="follows">Follow <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></Link>
                        </div>
                        <div className="col-lg-8">
                            <ul className="user-section">
                                <li className="user">
                                    <span className="name">Name:</span><em>{instructor.name}</em>
                                </li>
                                <li>Job Title:<em>{instructor.designation}</em> </li>
                                <li>Phone:<em>{instructor.phone}</em> </li>
                                <li>Email:<em>{instructor.email}</em> </li>
                                <li className="social">
                                    Follow: <em>
                                        <Link to="#"><span aria-hidden="true" className="social_facebook"></span></Link>
                                        <Link to="#"><span aria-hidden="true" className="social_twitter"></span></Link>
                                        <Link to="#"><span aria-hidden="true" className="social_linkedin"></span></Link>
                                    </em>
                                </li>
                            </ul>
                            <h3>Biography</h3>
                            <p>{instructor.bio}</p>
                            <p>Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate.</p>
                            {counters &&
                                <div className="count__area2"> 
                                    <ul className="row">
                                        {counters.map( (counter, num) => (
                                            <li key={num} className="col-lg-4">
                                                <div className="count__content">
                                                    <div className="icon">
                                                        <img src={counter.countIcon} alt="profile" />
                                                    </div>
                                                    <div className="text">
                                                    <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                                <span className="count__content-title counter">{counter.countNum}</span>
                                                            </VisibilitySensor>
                                                        )}

                                                        <em>{counter.countSubtext}</em>
                                                        <p>{counter.countTitle}</p> 
                                                    </div>                                           
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                            <h2 className="teacher__course">Teacher Courses</h2>
                            <div className="react-course-filter related__course">
                                <div className="row react-grid">  
                                    {courses.map((data, index) => {
                                        return (
                                            <div className="single-studies col-lg-6 grid-item">
                                                <div className="inner-course">
                                                    <div className="case-img">
                                                        <Link to="#" className="cate-w">{data.name}</Link>
                                                        <img src={require(`../../assets/images/course/${data.image}`)} alt={data.title} />
                                                    </div>
                                                    <div className="case-content">
                                                        <ul className="meta-course">
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> {data.review} review </li>
                                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> {data.enrolled} Students </li>
                                                        </ul>
                                                        <h4 className="case-title"> <Link to={`/course/${data.id}`}>{data.title}</Link></h4>
                                                        <div className="react__user">
                                                            <img src={require(`../../assets/images/course/${data.authorImg}`)} alt={data.author} /> {data.author}
                                                        </div>
                                                        <ul className="react-ratings">
                                                            <li className="react-book"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> {data.lesson} Lessons </li>
                                                            <li className="price">{data.price}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> 
                                        )
                                    }).slice(0, 4)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>

    );
}


export default InstructorDetailsMain;