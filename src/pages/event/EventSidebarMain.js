import React  from 'react';
import { Link } from 'react-router-dom';

import SingleEventTwo from '../../components/Event/SingleEventTwo';


import img from '../../assets/images/related-course/1.jpg'
import events from '../../data/Events.json';

const EventSidebarMain = () => {

    return (
        <div class="react-upcoming__event react-upcoming__event_list blog__area pt-90 pb-120">
            <div class="container">  
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row align-items-center back-vertical-middle shorting__course3 mb-50">
                            <div class="col-md-6">
                                <div class="all__icons">                                   
                                    <div class="result-count">We found 24 events available for you</div>
                                </div>
                            </div>
                            <div class="col-md-6 text-right">                                
                                <select class="from-control">
                                    <option>Event Type: All</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by lates</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>                      
                        <div class="row">
                            {events.map((data, index) => {
                                return (
                                    <div className="col-lg-4">
                                        <SingleEventTwo
                                            eventID= {data.id}
                                            eventImg= {data.image}
                                            eventDayCount= {data.dayCount}
                                            eventDate= {data.date}
                                            eventTitle= {data.title}
                                            eventLocation= {data.location}
                                        />
                                    </div>
                                )
                            }).slice(0, 9)}                                  
                        </div>  
                        
                        <ul class="back-pagination pt---20">
                            <li><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li class="back-next"><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <div class="react-sidebar react-sidebar-event ml----30">
                            <div class="widget back-post blog-form">
                                <h3 class="widget-title">Find events</h3>
                                <form id="contact-form">
                                    <div class="event-input">
                                        <input id="name" type="text" name="name" placeholder="Event from" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </div>                                            
                                    <div class="search-form">
                                        <input type="text" name="input" placeholder="Search..." />
                                        <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </button>
                                    </div>                                                
                                    <select class="from-control">
                                        <option>All Categories</option>
                                        <option>Sort by popularity</option>
                                        <option>Sort by average rating</option>
                                        <option>Sort by lates</option>
                                        <option>Sort by price: low to high</option>
                                        <option>Sort by price: high to low</option>
                                    </select>
                                    <div class="location-input">
                                        <input id="subject" type="text" name="subject" placeholder="Location" />  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>                                
                                    </div>                                             
                                </form>
                            </div>
                            <div class="widget back-post">
                                <h3 class="widget-title">Popular Events</h3>
                                <ul class="related-courses">
                                    {events.map((data, index) => {
                                        return (
                                            <li>
                                                <Link to={`/event/${data.id}`}><span class="post-images"><img src={require(`../../assets/images/event/${data.image}`)} alt="post" /></span></Link>
                                                <div class="titles">                                                    
                                                    <h4><Link to={`/event/${data.id}`}>{data.title}</Link></h4>
                                                    <span>{data.dayCount} {data.date}</span>
                                                </div>
                                            </li>
                                        )
                                    }).slice(10, 12)}                                           
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                                            
            </div>
        </div> 
    );
}

export default EventSidebarMain;