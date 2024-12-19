import React from 'react';
import { Link } from 'react-router-dom';


// Image
import aboutImg from '../../assets/images/about/about22.png';
import dotImg from '../../assets/images/about/dot.png';
import shapeImg1 from '../../assets/images/about/shape_01.png';
import shapeImg2 from '../../assets/images/about/shape_02.png';
import shapeImg3 from '../../assets/images/about/shape_03.png';

const About = () => {

    return (
        <div className="about__area about2__area p-relative pb---120">
            <div className="container about__area-width">
                <div className="row">
                    <div className="col-lg-6 md-mb-50">
                        <div className="about__image">
                            <img className="react__shape__11" src={dotImg} alt="Shape Image" />
                            <img className="react__shape__1" src={shapeImg2} alt="Shape Image" />
                            <img src={aboutImg} alt="About" />
                            <img className="react__shape__2" src={shapeImg1} alt="Shape Image" />
                            <img className="react__shape__33" src={shapeImg3} alt="Shape Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">One of The Largest, <br /> <em>Most Online Course</em></h2>
                            <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Why I say old chap that is spiffing in my flat such a fibber<br/> mufty mush, porkies barney pukka only a quid a what a<br/> load of rubbish good time.</p>
                            <ul>
                                <li><i className="icon_check wow animate__fadeInUp" data-wow-duration="0.7s"></i> Access more then 100K online courses</li>
                                <li><i className="icon_check wow animate__fadeInUp" data-wow-duration="0.9s"></i> Upskill your organization. </li>
                            </ul>
                            <div className="about__btn wow animate__fadeInUp" data-wow-duration="1.2s">
                                <Link to="/about"> Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;