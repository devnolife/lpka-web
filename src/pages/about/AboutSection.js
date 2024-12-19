import React from 'react';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/images/about/ab.png'
import shapeImg from '../../assets/images/about/badge.png'

const AboutPart = () => {

    return (
        <div className="about__area about__area_one p-relative pt---100 pb---120">
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__image wow animate__fadeInUp" data-wow-duration="0.3s">
                            <img src={aboutImg} alt="About" />
                            <img className="react__shape__ab" src={shapeImg} alt="Shape Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Welcome to <br/> <em>Echooling LMS Platform</em></h2>
                            <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Education is both the act of teaching knowledge to others and<br/> the act of receiving knowledge from someone else.</p>
                            <p className="about__paragraph2 wow animate__fadeInUp" data-wow-duration="0.7s"> Have questions?  <Link to="#"> Get Free Guide </Link></p>
                            <p className="wow animate__fadeInUp" data-wow-duration="0.9s">Education also refers to the knowledge received through schooling instruction <br/>and to the institution of teaching as a whole. The main purpose of education <br/>is the integral development of a person.</p>
                            <ul>
                                <li><Link to="/about" className="more-about wow animate__fadeInUp" data-wow-duration="1.2s"> Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                                <li className="last-li wow animate__fadeInUp" data-wow-duration="1.3s">
                                    <em>Get Support</em>
                                    <a href="mailto:support@react.com">support@react.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPart;