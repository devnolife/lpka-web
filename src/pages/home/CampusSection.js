import React  from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../components/SectionTitle'


import campusImg1 from '../../assets/images/campus/1.svg'
import campusImg2 from '../../assets/images/campus/2.svg'
import campusImg3 from '../../assets/images/campus/3.svg'
import campusImg4 from '../../assets/images/campus/4.png'
import campusShape from '../../assets/images/campus/shape.png'

const Campus = () => {

    return (
        <div className="campus_sec pt---100 pb---110">
            <div className="container">
                <SectionTitle Title="Campus Life" />
                <div className="row">
                    <div className="col-lg-7">
                        <div className="about__content">
                            <ul>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg1} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>Do More, Stress Less</h4>
                                        <p>Why I say old chap that is spiffing he legged <br/>it in my flat easy peasy.</p>
                                    </div>
                                    <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                                </li>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg2} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>The Business Intelligence</h4>
                                        <p>Why I say old chap that is spiffing he legged <br/>it in my flat easy peasy.</p>
                                    </div>
                                    <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                                </li>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s">
                                    <div className="icon">
                                        <img src={campusImg3} alt="image" />
                                    </div>
                                    <div className="text">
                                        <h4>System Administration</h4>
                                        <p>Why I say old chap that is spiffing he legged <br/>it in my flat easy peasy.</p>
                                    </div>
                                    <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                                </li>
                            </ul>  
                        </div>                              
                    </div>
                    <div className="col-lg-5">                                
                        <div className="about__image">
                            <img src={campusImg4} alt="image" />
                            <img className="shape-1" src={campusShape} alt="image" />
                        </div>                                
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/about" className="more-about"> More about Campus Life <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                </div>
            </div>
        </div>
    );
}

export default Campus;