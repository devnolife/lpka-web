import React, { Component, useState } from 'react';
import Slider from "react-slick";

import SectionTitle from '../../components/SectionTitle'
import SingleEvent from '../../components/Event/SingleEvent';

import events from '../../data/Events.json';

const Event = () => {
    const eventSettings = {
        dots: true,
        arrows: false, 
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
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
        <div className="react-upcoming__event blog__area">
            <div className="container">
                <SectionTitle Title="Upcoming Events" />
                <div className="event-slider owl-carousel wow animate__fadeInUp" data-wow-duration="0.3s">
                    <Slider {...eventSettings}> 
                        {events.map((data, index) => {
                            return (
                                <SingleEvent
                                    eventID= {data.id}
                                    eventImg= {data.image}
                                    eventBannerImg= {data.bannerImg}
                                    eventDayCount= {data.dayCount}
                                    eventDate= {data.date}
                                    eventStartTime= {data.startTime}
                                    eventEndTime= {data.endTime}
                                    eventCategory= {data.category}
                                    eventTitle= {data.title}
                                    eventBtnText= "Find Out More"
                                    eventLocation= {data.location}
                                />
                            )
                        }).slice(0, 6)}
                    </Slider>
                </div>                        
            </div>
        </div>
    );
}

export default Event;