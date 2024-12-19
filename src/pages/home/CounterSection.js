import React, { useState } from "react";

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 

const Counter = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 1478,
            countTitle: 'Successfully Trained',
            counterSubtext: 'ENROLLED LEARNERS',
        },
        {
            countNum: 1731,
            countTitle: 'Available Courses',
            counterSubtext: 'COUNTRYWIDE AWARDS',
        },
        {
            countNum: 280,
            countTitle: 'Scheduled Events',
            counterSubtext: 'SUCCESS EVENTS',
        },
        {
            countNum : 1045,
            countTitle: 'Getting Featured on',
            counterSubtext: 'ONLINE COURSES',
        }

    ];

    return (
        <div className="count__area pb---110">
            <div className="container count__width">
                    <div className="row">
                        <div className="col-xxl-11 col-xl-11 col-lg-11 offset-lg-1">
                            {counters &&
                                <div className="row">
                                    {counters.map( (counter, num) => (
                                        <div key={num} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 wow animate__fadeInUp" data-wow-duration="0.3s">
                                            <div className="count__content">
                                                <p className="count__content--paragraph">Successfully <br/>Trained</p>
                                                <h3 className="count__content--title-1 counter">
                                                    <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </h3>
                                                <p className="count__content--paragraph2">Enrolled Learners</p>                                            
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Counter;