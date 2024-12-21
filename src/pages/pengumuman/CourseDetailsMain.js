import React  from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Faq from '../../components/Faq';
import courses from '../../data/Courses.json';

import authorImg1 from '../../assets/images/course-single/user4.jpg'
import authorImg2 from '../../assets/images/course-single/user5.jpg'

const CourseDetailsMain = (props) => {
    let tab1 = "Discription",
        tab2 = "Curriculum",
        tab3 = "Reviews",
        tab4 = "FAQ"
        const tabStyle = 'nav nav-tabs';

    const { courseImg, courseName, courseAuthor, courseLesson, courseDuration, courseEnrolled, coursePrice, courseRegularPrice, courseLanguage } = props;
    
    return (
        <div className="back__course__page_grid react-courses__single-page pb---16 pt---110">
            <div className="container pb---70">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="course-details-video mb---30">
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/e5Hc2B50Z7c" title="YouTube video player" allow="accelerometer"></iframe>
                        </div>
                        <Tabs>
                            <div className="course-single-tab">
                                <TabList className={tabStyle}>
                                    <Tab><button>{tab1}</button></Tab>
                                    <Tab><button>{tab2}</button></Tab>
                                    <Tab><button>{tab3}</button></Tab>
                                    <Tab><button>{tab4}</button></Tab>
                                </TabList>
                                
                                <div className="tab-content" id="back-tab-content">
                                    <TabPanel>
                                        <div className="tab-pane">
                                            <h3>About This Course</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat nis Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                            <p>Sed ut perspiciatis unde om nis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo in ve ntore veritatis et qua architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neu e porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur ad ipisci velit, sed quia non numquame senius modi tempora incidunt ut labore et dolore magnam.</p>

                                            <div className="image-banner"><img src={require(`../../assets/images/course/${courseImg}`)} alt="user" /></div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="tab-pane">
                                            <h3>Course Curriculum</h3>
                                            <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                                            <div className="single-week">
                                                <ul className="week__top">
                                                    <li>Week 1</li>
                                                    <li>0/4</li>
                                                </ul>
                                                <h3>Beginners level</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                                <h3>2 Videos,1 Audio,1 Reading</h3>
                                                <ul className="course__title">
                                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> <b>Video:</b> Greetings and Introductions <em className="questions">2 questions</em> <em><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 12 minutes</em></li>
                                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> <b>Video:</b> Introducing Elizabeth Gerber <em> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 26 minutes</em></li>
                                                </ul>
                                            </div> 
                                            <div className="single-week">
                                                <ul className="week__top">
                                                    <li>Week 2</li>
                                                    <li>0/4</li>
                                                </ul>
                                                <h3>Intermediate level</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                                <h3>2 Videos,1 Audio,1 Reading</h3>
                                                <ul className="course__title">
                                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> <b>Video:</b> Greetings and Introductions <em className="questions">2 questions</em> <em><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 12 minutes</em></li>
                                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> <b>Video:</b> Introducing Elizabeth Gerber <em> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 26 minutes</em></li>
                                                </ul>
                                            </div>  
                                            <div className="single-week">
                                                <ul className="week__top">
                                                    <li>Week 3</li>
                                                    <li>0/4</li>
                                                </ul>
                                                <h3>Advanced level</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                                <h3>2 Videos,1 Audio,1 Reading</h3>
                                                <ul className="course__title">
                                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> <b>Video:</b> Greetings and Introductions <em className="questions">2 questions</em> <em><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 12 minutes</em></li>
                                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> <b>Video:</b> Introducing Elizabeth Gerber <em> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 26 minutes</em></li>
                                                </ul>
                                            </div>   
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="tab-pane">
                                            <h3>Reviews</h3>                                            
                                            <div className="row mt---40 mb----40">
                                                <div className="col-lg-4">
                                                    <div className="five__number">
                                                        <em>4.5</em>
                                                        <div className="back-ratings"> 
                                                            <i className="icon_star"></i>
                                                            <i className="icon_star"></i>
                                                            <i className="icon_star"></i>
                                                            <i className="icon_star"></i>
                                                            <i className="icon_star"></i>
                                                        </div>
                                                        <h6>(4 Ratings)</h6>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="back-progress-bar">
                                                        <div className="skillbar-style2">
                                                            <div className="skill_inners">
                                                                <span className="skillbar-title">5 stars</span>
                                                                <div className="skillbars green-dark-bg" data-percent="100">               
                                                                    <p className="skillbar-bar"  style={{ width: '100%'}}></p> 
                                                                </div>
                                                                <span>2</span>                                                                
                                                            </div>
                                                            <div className="skill_inners">
                                                                <span className="skillbar-title">4 stars</span>
                                                                <div className="skillbars green-dark-bg" data-percent="50">               
                                                                    <p className="skillbar-bar" style={{ width: '50%'}}></p> 
                                                                </div>
                                                                <span>1</span>                                                                
                                                            </div>
                                                            <div className="skill_inners">
                                                                <span className="skillbar-title">3 stars</span>
                                                                <div className="skillbars green-dark-bg" data-percent="30">               
                                                                    <p className="skillbar-bar" style={{ width: '30%'}}></p> 
                                                                </div>
                                                                <span>1</span>                                                                
                                                            </div>
                                                            <div className="skill_inners">
                                                                <span className="skillbar-title">2 stars</span>
                                                                <div className="skillbars green-dark-bg" data-percent="10">               
                                                                    <p className="skillbar-bar" style={{ width: '10%'}}></p> 
                                                                </div>
                                                                <span>0</span>                                                                
                                                            </div>
                                                            <div className="skill_inners">
                                                                <span className="skillbar-title">1 stars</span>
                                                                <div className="skillbars green-dark-bg" data-percent="0">               
                                                                    <p className="skillbar-bar" style={{ width: '0'}}></p> 
                                                                </div>
                                                                <span>0</span>                                                                
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to="#" className="post-author">
                                                <div className="avatar">
                                                    <img src={authorImg1} alt="user" /> 
                                                </div>
                                                <div className="info">
                                                    <div className="back-ratings"> 
                                                        <i className="icon_star"></i>
                                                        <i className="icon_star"></i>
                                                        <i className="icon_star"></i>
                                                        <i className="icon_star"></i>
                                                        <i className="icon_star"></i>
                                                    </div>
                                                    <h4 className="name">Bodrum Says <span className="designation">July 8, 2022 at 7:38 am</span></h4>
                                                    <p>Mi eget mauris pharetra et. Bibendum arcu vitae elementum curabitur vitae. Viverra mauris in aliquam sem fringilla ut morbi tincidunt aliquam purus.</p>          
                                                </div>
                                            </Link>

                                            <Link to="#" className="post-author">
                                                <div className="avatar">
                                                    <img src={authorImg2} alt="user" /> 
                                                </div>
                                                <div className="info"> 
                                                    <div className="back-ratings"> 
                                                        <i className="icon_star"></i>
                                                        <i className="icon_star"></i>
                                                        <i className="icon_star"></i>
                                                        <i className="icon_star"></i>
                                                        <i className="icon_star"></i>
                                                    </div>                                                                                 
                                                    <h4 className="name">Hanson Deck <span className="designation">July 9, 2022 at 6:20 am</span></h4>
                                                    <p>Lobortis elementum nibh tellus molestie praesent semper feugiat nibh sed pulvinar proin.</p>
                                                </div>
                                            </Link>
                                            <div className="blog-form pt---30">
                                                <h3>Write a Review</h3>
                                                <p className="pb---15">Your email address will not be published. Required fields are marked *</p>
                                                <form id="contact-form">             
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="back-input">
                                                                <input id="name" type="text" name="name" placeholder="Name" />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 pdl-5">
                                                            <div className="back-input">
                                                                <input id="email" type="email" name="email" placeholder="Email" />                                  
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-12">
                                                            <div className="back-input">
                                                                <input id="subject" type="text" name="subject" placeholder="Subject" />                                  
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="back-ratings"> <b>Ratings:</b> 
                                                                <i className="icon_star"></i>
                                                                <i className="icon_star"></i>
                                                                <i className="icon_star"></i>
                                                                <i className="icon_star"></i>
                                                                <i className="icon_star"></i>
                                                            </div>
                                                            <div className="back-textarea">
                                                                <textarea id="message" name="message" placeholder="Message"></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">         
                                                            <button type="submit" className="back-btn">Submit Review <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                                                        </div>
                                                    </div>                                                    
                                                </form>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="tab-pane">
                                            <h3>FAQ</h3>
                                            <Faq />
                                        </div>
                                    </TabPanel>
                                </div>
                            </div>
                        </Tabs>
                        <div className="react-course-filter related__course">                                  
                            <h3>Related Courses</h3>                                             
                            <div className="row react-grid">
                                {courses.map((data, index) => {
                                    return (
                                        <div className="single-studies col-lg-6 grid-item">
                                            <div className="inner-course">
                                                <div className="case-img">
                                                    <Link to={`/course/${data.id}`} className="cate-w">{data.name}</Link>
                                                    <img src={require(`../../assets/images/course/${data.image}`)} alt={data.title} />
                                                </div>
                                                <div className="case-content">
                                                    <ul className="meta-course">
                                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> {data.review} review </li>
                                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> {data.enrolled} Students </li>
                                                    </ul>
                                                    <h4 className="case-title"> <Link to={`/course/${data.id}`}>{data.title}</Link></h4>
                                                    <div className="react__user">
                                                        <img src={require(`../../assets/images/course/${data.authorImg}`)} alt={data.author} /> {data.author}
                                                    </div>
                                                    <ul className="react-ratings">
                                                        <li className="react-book"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> {data.lesson} Lessons</li>
                                                        <li className="price">{data.price}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }).slice(4, 6)}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 md-mt-60">
                        <div className="react-sidebar react-back-course2 ml----30">                                                                        
                            <div className="widget get-back-course">                                       
                                <ul className="price">
                                    <li>{coursePrice} USD</li>
                                    <li>{courseRegularPrice} USD</li>
                                    <li>25% OFF</li>
                                </ul>                                        
                                <ul className="price__course">
                                    <li> <i className="icon_profile"></i> Instructor <b>{courseAuthor}</b></li>
                                    <li><i className="icon_tag_alt"></i> Subject <b>{courseName}</b></li>
                                    <li> <i className="icon_group"></i> Enrolled <b>{courseEnrolled} students</b></li>
                                    <li><i className="icon_clock_alt"></i> Duration <b>{courseDuration}</b></li>
                                    <li><i className="icon_book_alt"></i> Lectures <b>{courseLesson} lectures</b></li>
                                    <li><i className="icon_map_alt"></i> Language <b> {courseLanguage}</b></li>
                                </ul>
                                <Link to="#" className="start-btn">Start Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                                <div className="share-course">Share this course <em><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></em>
                                    <span>
                                        <Link to="#"><i aria-hidden="true" className="social_facebook"></i></Link>
                                        <Link to="#"><i aria-hidden="true" className="social_twitter"></i></Link>
                                        <Link to="#"><i aria-hidden="true" className="social_linkedin"></i></Link>
                                    </span>
                                </div>
                            </div> 
                            <div className="widget react-categories-course">
                                <h3 className="widget-title">Course categories</h3>
                                <ul className="recent-category">
                                    <li> <Link to="/course">Art & Design (6)</Link></li>
                                    <li> <Link to="/course">Exercise (4)</Link></li>
                                    <li> <Link to="/course">Photography (8)</Link></li>
                                    <li> <Link to="/course">Environmental Sciences (3)</Link></li>
                                    <li> <Link to="/course">Software Training (5)</Link></li>
                                    <li> <Link to="/course">Software Development (2)</Link></li>
                                    <li> <Link to="/course">Music (10)</Link></li>
                                    <li> <Link to="/course">Material Design (2)</Link></li>
                                    <li> <Link to="/course">Technology (7)</Link></li>
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