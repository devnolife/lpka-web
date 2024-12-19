import React  from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb/EventBreadcrumbs';
import EventDetailsMain from './EventDetailsMain';
import ScrollToTop from '../../components/ScrollTop';
import events from '../../data/Events.json';

import Logo from '../../assets/images/logos/logo2.png';


const EventDetails = () => {

    const location = useLocation();
    const eventURL = location.pathname.split('/'); 
    
    const event = events.find((b) => b.id === Number(eventURL[2]));

    return (
        <body className="course-single">
            <Header
                parentMenu='event'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />

            <div class="react-wrapper">
                <div class="react-wrapper-inner">
                    <Breadcrumb
                        eventID= {event.id}
                        eventImg= {event.image}
                        eventBannerImg= {`${event.bannerImg}`}
                        eventDayCount= {event.dayCount}
                        eventDate= {event.date}
                        eventStartTime= {event.startTime}
                        eventEndTime= {event.endTime}
                        eventCategory= {event.category}
                        eventTitle= {event.title}
                        eventBtnText= "Find Out More"
                        eventLocation= {event.location}
                    />

                    <EventDetailsMain
                        eventID= {event.id}
                        eventImg= {event.image}
                        eventBannerImg= {event.bannerImg}
                        eventDayCount= {event.dayCount}
                        eventDate= {event.date}
                        eventStartTime= {event.startTime}
                        eventEndTime= {event.endTime}
                        eventCategory= {event.category}
                        eventTitle= {event.title}
                        eventBtnText= "Find Out More"
                        eventLocation= {event.location}
                        eventCost= {event.cost}
                        eventHost= {event.host}
                        eventTotalSlot= {event.totalSlot}
                        eventBookedSlot= {event.bookedSlot}
                        eventContactNo= {event.phone}
                    />

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
            </div>

            <Footer />

        </body>
    );
}

export default EventDetails;