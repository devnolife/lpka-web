import React  from 'react';

import { Link } from 'react-router-dom';

import SingleEvent from '../../components/Event/SingleEvent';

import events from '../../data/Events.json';

const EventMain = () => {

    return (
        <div className="react-upcoming__event react-upcoming__event_page blog__area pt---100 pb---112">
            <div className="container">  
                <div className="row align-items-center back-vertical-middle shorting__course3 mb-50">
                    <div className="col-md-6">
                        <div className="all__icons">                                   
                            <div className="result-count">We found 24 events available for you</div>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">                                
                        <select className="from-control">
                            <option>Event Type: All</option>
                            <option>Sort by popularity</option>
                            <option>Sort by average rating</option>
                            <option>Sort by lates</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                        </select>
                    </div>
                </div>                      
                <div className="row">
                    {events.map((data, index) => {
                        return (
                            <div className="col-lg-3">
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
                                    eventBtnText= "Get Ticket"
                                    eventLocation= {data.location}
                                />
                            </div>
                        )
                    }).slice(0, 12)}
                </div>  
                <ul className="back-pagination pt---20">
                    <li><Link to="#">1</Link></li>
                    <li><Link to="#">2</Link></li>
                    <li className="back-next"><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                </ul>                                          
            </div>
        </div>  
    );
}

export default EventMain;