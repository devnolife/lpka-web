import React  from 'react';
import { Link } from 'react-router-dom';


import instructor1 from '../../assets/images/instructors/9.png'
import instructor2 from '../../assets/images/instructors/10.png'
import instructor3 from '../../assets/images/instructors/11.png'
import instructor4 from '../../assets/images/instructors/12.png'

const CourseDetailsMain = (props) => {
    const { eventDate, eventStartTime, eventEndTime, eventLocation, eventCost, eventHost, eventTotalSlot, eventBookedSlot, eventContactNo } = props;

    return (
        <div className="back__course__page_grid react-courses__single-page react-events__single-page pb---40 pt---120">
            <div className="container pb---70">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="events-details">
                            <h3>About The Event</h3>
                            <p>Tempor orci eu lobortis elementum nibh tellus molestie nunc. Augue interdum velit euismod in. varius sit amet mattis vulputate. Nunc pulvinar sapien et ligula ullamcorper malesuada. Ullamcorper velit sed ullamcorper morbi. Varius morbi enim nunc faucibus a pellentesque sit amet. Bibendum est ultricies integer quis auctor elit. Dui id ornare arcu odio ut sem nulla pharetra. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Lacinia at quis risus sed vulputate odio ut enim cras fermentum odio eu feugiat pretium nibh ipsum.</p>

                            <p>Mi eget mauris pharetra et ultrices neque ornare. Duis ut diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam.</p>
                            <div className="videos"><iframe width="100%" height="576" src="https://www.youtube.com/embed/e5Hc2B50Z7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

                            <p>Feel free to choose from our huge selection of templates, customize easily, and create a stunning website for your customers</p>

                            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi proin condimentum.</p>

                            <ul className="mata-tags">
                                <li className="tags">Tags:</li>
                                <li><Link to="#">Education</Link></li>
                                <li><Link to="#">Echooling</Link></li>
                                <li><Link to="#">Course</Link></li>
                                <li><Link to="#">Online Course</Link></li>
                            </ul>

                            <ul className="others-instructors">
                            <li><h3>Attendee List</h3></li>
                            <li>
                                <span><img src={instructor1} alt="user" /></span>
                                <span>Eric Widget <em>Teaching Assistant</em></span>
                            </li>
                            <li>
                                <span><img src={instructor2} alt="user" /></span>
                                <span>Hanson Deck <em>Professor</em></span>
                            </li>
                            <li>
                                <span><img src={instructor3} alt="user" /></span>
                                <span>Dianne Ameter <em>Special Assistant</em></span>
                            </li>
                            <li>
                                <span><img src={instructor4} alt="user" /></span>
                                <span>Hanson Deck <em>Administration</em></span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 md-mt-60">
                        <div className="react-sidebar react-back-course2 ml----30">                                                                        
                            <div className="widget get-back-course">                                       
                                <ul className="price__course">
                                    <li> <i className="icon_ribbon_alt"></i> Cost: <b className="prs">{eventCost}</b></li>
                                    <li> <i className="icon_profile"></i> Instructo: <b>{eventHost}</b></li>
                                    <li> <i className="icon_group"></i> Total Slot: <b>{eventTotalSlot}</b></li>
                                    <li><i className="icon_lock_alt"></i> Booked Slot: <b>{eventBookedSlot}</b></li>
                                </ul>
                                <Link to="#" className="start-btn">Join Now! <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                                <div className="share-course">Share this course <em><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></em>
                                    <span>
                                        <Link to="#"><i aria-hidden="true" className="social_facebook"></i></Link>
                                        <Link to="#"><i aria-hidden="true" className="social_twitter"></i></Link>
                                        <Link to="#"><i aria-hidden="true" className="social_linkedin"></i></Link>
                                    </span>
                                </div>
                            </div> 
                            <div className="widget react-date-sec">
                                <ul className="recent-date">
                                    <li> Date: <b>{eventDate}</b></li>
                                    <li> Time: <b>{eventStartTime} - {eventEndTime}</b></li>
                                    <li> Venue: <b>{eventLocation}</b></li>
                                    <li> Phone: <b>{eventContactNo}</b></li>
                                </ul>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default CourseDetailsMain;