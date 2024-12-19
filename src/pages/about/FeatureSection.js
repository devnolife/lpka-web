import React from 'react';

import { Link } from 'react-router-dom';


import icon1 from '../../assets/images/topics/icon.png'
import icon2 from '../../assets/images/topics/icon2.png'
import icon3 from '../../assets/images/topics/icon3.png'

const Feature = () => {

    return (
        <div className="react_populars_topics react_populars_topics2 react_populars_topics_about pb---80">
            <div className="react__title__section react__title__section-all">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h6 className="wow animate__fadeInUp" data-wow-duration="0.3s">Echooling available courses</h6>
                        <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.5s"> Online Coaching Lessons For <br/>Remote Learning </h2>
                    </div>                                
                </div>                            
            </div>
            <div className="container">      
                <div className="row pt---30">
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.3s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={icon1} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><a href="coureses-grid.html">Accredited Campus</a></h3>
                                <p>Nulla porttitor accumsan tincidunt. vamus <br/>magna justo, lacinia eget consectetur sed, <br/>convallis at tellus.</p>
                                <a href="#"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                            </div>                                    
                        </div>
                    </div>
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.5s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={icon2} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><a href="coureses-grid.html">Best Quality Graduate</a></h3>
                                <p>Nulla porttitor accumsan tincidunt. vamus <br/>magna justo, lacinia eget consectetur sed, <br/>convallis at tellus.</p>
                                <a href="#"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                            </div>                                    
                        </div>
                    </div>
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.7s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={icon3} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><a href="coureses-grid.html">Inspiring Student Life</a></h3>
                                <p>Nulla porttitor accumsan tincidunt. vamus <br/>magna justo, lacinia eget consectetur sed, <br/>convallis at tellus.</p>
                                <a href="#"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                            </div>                                    
                        </div>
                    </div>                            
                </div>
            </div>
        </div>
    );
}

export default Feature;