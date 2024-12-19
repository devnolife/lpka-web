import React from 'react';
import Slider from "react-slick";

import SectionTitle from '../../components/SectionTitle'
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';

import testiImg from '../../assets/images/testimonial/testimonial.png';
import comaImg from '../../assets/images/testimonial/coma.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <div className="react-clients react-clientso home-testimonial pt---90 pb---120">
                <div className="container">
                    <SectionTitle Title="What our student saying" />
                    <div className="client-slider wow animate__fadeInUp" data-wow-duration="0.3s">
                        <Slider {...testimonialSettings}>
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Justin Case"
                                Designation="Student"
                                Desc="Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in."
                                ratingCount='4.9'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Justin Case"
                                Designation="Student"
                                Desc="Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in."
                                ratingCount='4.9'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Justin Case"
                                Designation="Student"
                                Desc="Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in."
                                ratingCount='4.9'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Justin Case"
                                Designation="Student"
                                Desc="Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in."
                                ratingCount='4.9'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                            <SingleTestimonial
                                itemClass="single-client"
                                itemImg={testiImg }
                                Title="Justin Case"
                                Designation="Student"
                                Desc="Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in."
                                ratingCount='4.9'
                                reviewCount='14'
                                comaImg={comaImg}
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial