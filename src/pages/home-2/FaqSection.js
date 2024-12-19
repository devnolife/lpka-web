import React from 'react';
import { Link } from 'react-router-dom';
import Faq from '../../components/Faq';

// Image
import accordionImg from '../../assets/images/acc.png';
import shapeImg from '../../assets/images/banner2/shape_01.png';

const FaqPart = () => {

    return (
        <div class="accordion__area p-relative pt---110">
            <div class="accordion__shape">
                <img class="accordion__shape-1" src={accordionImg} alt="shape png" />
                <img class="accordion__shape-1a" src={shapeImg} alt="shape png" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="accordion__wrapper">
                            <div class="accordion__wrapper-1">
                                <h6 className="wow animate__fadeInUp" data-wow-duration="0.3s">Find Your Answers</h6>
                                <h2 className="wow animate__fadeInUp" data-wow-duration="0.5s">Have any thought? Look here.</h2>
                                <p className="wow animate__fadeInUp" data-wow-duration="0.7s">Completely plagiarize fully researched collaboration and  idea-sharing for covalent.</p>
                                <Link to="/about" class="border-btns wow animate__fadeInUp" data-wow-duration="0.9s"> Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                            </div> 
                        </div>
                    </div>
                    <div class="col-lg-6 wow animate__fadeInUp" data-wow-duration="0.6s">
                        <Faq />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqPart;