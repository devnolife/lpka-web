import React from 'react';
import { Link } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Image

import shapeImg1 from '../../assets/images/tab/shape_01.png';
import shapeImg2 from '../../assets/images/tab/shape_02.png';
import shapeImg3 from '../../assets/images/tab/shape_03.png';

import tabImg1 from '../../assets/images/tab/1.png';
import tabImg2 from '../../assets/images/tab/2.png';
import tabImg3 from '../../assets/images/tab/3.png';
import tabImg4 from '../../assets/images/tab/4.png';

const Video = () => {

    const tabStyle = 'nav nav-tabs';

    return (
        <div className="high_quality-section pt---110 pb---120">
            <div className="container">
                <div className="react__title__section-all">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6 className="wow animate__fadeInUp" data-wow-duration="0.3s">Live Class</h6>
                            <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.3s">High quality video,audio & live class</h2>
                        </div>                                
                    </div>                            
                </div>
                <Tabs>
                    <div className="react-tab-gird wow animate__fadeInUp" data-wow-duration="0.3s">
                        <div className="tab-content text-center">
                            <img className="shape__1" src={shapeImg1} alt="image" />
                            <img className="shape__2" src={shapeImg2} alt="image" />
                            <img className="shape__3" src={shapeImg3} alt="image" />
                            <TabPanel>
                                <div className="tab-pane active" id="home">
                                    <iframe width="970" height="576" src="https://www.youtube.com/embed/e5Hc2B50Z7c" title="YouTube video player" allow="accelerometer"></iframe>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-pane" id="profile">
                                    <iframe width="970" height="576" src="https://www.youtube.com/embed/e5Hc2B50Z7c" title="YouTube video player" allow="accelerometer"></iframe>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-pane" id="messages">
                                    <iframe width="970" height="576" src="https://www.youtube.com/embed/e5Hc2B50Z7c" title="YouTube video player" allow="accelerometer"></iframe>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-pane" id="settings">
                                    <iframe width="970" height="576" src="https://www.youtube.com/embed/e5Hc2B50Z7c" title="YouTube video player" allow="accelerometer"></iframe>
                                </div>
                            </TabPanel>
                        </div>
                        <TabList className={tabStyle}>
                            <Tab>
                                <button>
                                    <em className="icon"><img src={tabImg4} alt="image" /></em>
                                    <em className="text">Audio Classes</em>
                                </button>
                            </Tab>
                            <Tab>
                                <button>
                                    <em className="icon"><img src={tabImg2} alt="image" /></em>
                                    <em className="text">Live Classes</em>
                                </button>
                            </Tab>
                            <Tab>
                                <button>
                                    <em className="icon"><img src={tabImg1} alt="image" /></em>
                                    <em className="text">Recorded Class</em>
                                </button>
                            </Tab>
                            <Tab>
                                <button>
                                    <em className="icon"><img src={tabImg3} alt="image" /></em>
                                    <em className="text">Educator Support</em>
                                </button>
                            </Tab>
                        </TabList>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

export default Video;