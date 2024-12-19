import React from 'react';
import { Link } from 'react-router-dom';

import topicImg1 from '../../assets/images/topics/1.svg'
import topicImg2 from '../../assets/images/topics/2.png'
import topicImg3 from '../../assets/images/topics/3.svg'
import topicImg4 from '../../assets/images/topics/4.svg'

const Topics = () => {

    return (
        <div className="react_populars_topics pt---120 pb---120">
            <div className="container"> 
                <div className="react__title__section react__title__section2">
                    <div className="row align-v">
                        <div className="col-md-8">
                            <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.3s"> Popular Topic, Which are Most <b/> Favourite To Students </h2>
                        </div>
                        <div className="col-md-4 text-right wow animate__fadeInUp" data-wow-duration="0.5s">
                            <Link to="/about">
                                Book a visit <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </Link>
                        </div>
                    </div>
                </div>                       
                <div className="row pt---30">
                    <div className="col-md-3 wow animate__fadeInUp" data-wow-duration="0.3s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={topicImg1} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><Link to="/course">Art & Design</Link></h3>
                                <p>15 Courses</p>
                            </div>                                    
                        </div>
                    </div>
                    <div className="col-md-3 wow animate__fadeInUp" data-wow-duration="0.5s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={topicImg2} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><Link to="/course">Programming</Link></h3>
                                <p>38 Courses</p>
                            </div>                                    
                        </div>
                    </div>
                    <div className="col-md-3 wow animate__fadeInUp" data-wow-duration="0.7s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={topicImg3} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><Link to="/course">Accounting</Link></h3>
                                <p>24 Courses</p>
                            </div>                                    
                        </div>
                    </div>
                    <div className="col-md-3 wow animate__fadeInUp" data-wow-duration="0.9s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={topicImg4} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><Link to="/course">Content Writing</Link></h3>
                                <p>17 Courses</p>
                            </div>                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topics;