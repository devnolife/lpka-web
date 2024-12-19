import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../../data/Posts.json';

import userImg from '../../assets/images/course-single/user.jpg'
import userImg2 from '../../assets/images/course-single/user2.jpg'
import userImg3 from '../../assets/images/course-single/user3.jpg'

const BlogMain = (props) => {
    const { postTitle, postImg } = props;

    return (
        <div className="back__course__page_grid react-courses__single-page pb---40 pt---110">
            <div className="container pb---70">
                <div className="row">
                    <div className="col-lg-8">                                
                        <div className="blog-single-inner">
                            <div className="blog-content">
                                <p>Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. </p>

                                <p>Let me share with you  one of my favorite quotes , as stated in that quote, there are three key factors to achieve massive success in your life.</p>

                                <blockquote>I’m thinking I’m back you want a war or youwant to just give me gun everything’s got aprice rusty <em>Judith Cooper</em></blockquote>

                                <h3>So, what's the debate all about?</h3>

                                <p>Massa placerat duis ultricies lacus sed turpis. Varius quam quisque id diam vel quam elementum. Diam donec adipiscing tristique risus nec feugiat. Lacus laoreet non curabitur gravida arcu ac. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Dignissim diam quis enim lobortis. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Orci a scelerisque purus semper. Orci sagittis eu volutpat odio facilisis.</p>


                                <div className="blog-image">
                                    <img src = {require(`../../assets/images/blog/${postImg}`)} alt={postTitle} />
                                </div>

                                <p>Education every new parents knows the feeling nothing more than for everyone to  get at some sleep.But at least you’ve got Google. start building your first prototype today!</p> 

                                <p>Another important part of staying healthy is staying active. Opening up this app concept shows several options for workouts, from yoga to biking. Tapping on the small gray cards while swiping through them enlarges them, turns them bright, and even brings a fun animation moving across the card. Selecting in cycling.</p>
                                <div className="back-order-list pb---25">
                                    <h3>Integrate MagicBell into your React frontend</h3>
                                    <p>Leo vel fringilla est ullamcorper. Cursus risus at ultrices mi tempus imperdiet nulla. Bibendum arcu vitae elementum curabitur. Eget nunc scelerisque viverra mauris. Sed augue lacus viverra vitae congue eu consequat. Vitae nunc sed velit dignissim sodales ut eu sem integer. Nec ultrices dui sapien eget mi. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.</p>
                                    <ul>
                                        <li><i className="icon_check"></i> Your child’s interests, likes, dislikes</li>
                                        <li><i className="icon_check"></i> Their routines- patterns of eating, sleeping, toileting</li>
                                        <li><i className="icon_check"></i> Your child’s current wellbeing</li>
                                        <li><i className="icon_check"></i> Any major events taking place at home.</li>
                                    </ul>  
                                </div>

                                <p>Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Mollis aliquam<br/> ut porttitor leo a diam. At ultrices mi tempus imperdiet nulla.</p>

                                <div className="blog-tags">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <ul className="mata-tags">
                                                <li className="tags">Tags:</li>
                                                <li><Link to="#">Education</Link></li>
                                                <li><Link to="#">Elerning</Link></li>
                                                <li><Link to="#">Design</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="share-course">Share this post:
                                            <em><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></em>
                                                <span>
                                                    <Link to="#"><i aria-hidden="true" className="social_facebook"></i></Link>
                                                    <Link to="#"><i aria-hidden="true" className="social_twitter"></i></Link>
                                                    <Link to="#"><i aria-hidden="true" className="social_linkedin"></i></Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 

                                <div className="post-author">
                                    <div className="avatar">
                                        <img src={userImg} alt="" /> 
                                    </div>
                                    <div className="info">
                                        <h4 className="name">Sara Mening</h4>                                                
                                        <p>Lectus quam id leo in vitae turpis nisl pretium fusce id velit tortor. Dignissim cras tincidunt lobortis feugiat. Facilisis sed odio morbi quis commodo odio.</p>
                                        <div className="designation">
                                            <Link to="#"><i aria-hidden="true" className="social_facebook"></i></Link>
                                            <Link to="#"><i aria-hidden="true" className="social_twitter"></i></Link>
                                            <Link to="#"><i aria-hidden="true" className="social_linkedin"></i></Link>
                                        </div>
                                    </div>
                                </div> 

                                <div className="single-nav"> 
                                    <div className="back-prev"> <Link to="#"><i className="back-icon arrow_carrot-left"></i> PREV POST <em>Graduate Admissions</em></Link> </div>                                            
                                    <div className="back-next"><Link to="#"> NEXT POST <i className="back-icon arrow_carrot-right"></i> <em> Less is More</em></Link></div>
                                </div>

                                <div className="react-course-filter related__course">                                  
                                    <h3>Related Posts</h3>                                             
                                    <div className="row">     
                                        {posts.map((data, index) => {
                                            return (
                                                <div key={index} className="single-studies col-md-4 grid-item">
                                                    <div className="inner-course">
                                                        <div className="case-img">
                                                            <Link to="#" className="cate-w">April 12</Link>
                                                            <img src={require(`../../assets/images/blog/${data.image}`)} alt={data.title} />
                                                        </div>
                                                        <div className="case-content"> 
                                                            <em className="cate-camp">{data.category} </em>                                                    
                                                            <h4 className="case-title"> <Link to={`/blog/${data.id}`}>{data.title}</Link></h4>
                                                            <div className="react__user">
                                                                <img src={require(`../../assets/images/blog/${data.authorImg}`)} alt={data.author} /> {data.author}
                                                            </div>                                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }).slice(5, 8)}
                                    </div>
                                </div>
                                <div className="author-comment">
                                    <h4 className="title-comments">3 Comments</h4>
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div className="col-lg-1">
                                                    <div className="image-comments"><img src={userImg} alt="" /> </div>
                                                </div>
                                                <div className="col-lg-11">                            
                                                    <div className="dsc-comments">
                                                        <h6>Neal Adams <span className="reply"> <span className="date">July 23, 2022 at 11:24 pm</span></span></h6>
                                                        <p>Geeza show off show off pick your nose and blow off the BBC lavatory a blinding shot cack spend a penny bugger all mate show off pick your nose brolly.</p>
                                                        <Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg> Reply</Link>
                                                    </div>    
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div className="col-lg-1">
                                                    <div className="image-comments"><img src={userImg2} alt="" /> </div>
                                                </div>
                                                <div className="col-lg-11">                                   
                                                    <div className="dsc-comments">
                                                        <h6>Jim Séchen <span className="reply"> <span className="date">May 11, 2022 at 14:44 pm</span></span></h6>    
                                                        <p>The little rotter my good sir faff about Charles bamboozled I such a fibber tomfoolery at public school.</p>
                                                        <Link to="#"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg> Reply</Link>
                                                    </div>    
                                                </div>
                                            </div>
                                        </li>  
                                        <li>
                                            <div className="row">
                                                <div className="col-lg-1">
                                                    <div className="image-comments"><img src={userImg3} alt="" /> </div>
                                                </div>
                                                <div className="col-lg-11">                                   
                                                    <div className="dsc-comments">
                                                        <h6>Justin Case <span className="reply"> <span className="date">July 21, 2022 at 17:44 pm</span></span> </h6>                                                                     
                                                        <p>The little rotter my good sir faff about Charles bamboozled I such a fibber tomfoolery at public school.</p>
                                                        <Link to="#"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg> Reply</Link>
                                                    </div>    
                                                </div>
                                            </div>
                                        </li>                                              
                                    </ul>
                                </div> 

                                <div className="back-blog-form">
                                    <div id="blog-form" className="blog-form">
                                        <h3>Leave a Reply</h3>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                        <form>                                                    
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="back-textarea">
                                                        <textarea placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="back-input">
                                                        <input type="text" name="name" placeholder="Name" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="back-input">
                                                        <input type="email" name="email" placeholder="Email" />                                  
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-12">
                                                    <div className="back-input">
                                                        <input type="text" name="website" placeholder="Website" />                                  
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="back-check-box">
                                                        <input type="checkbox" id="box-1" /> Save my name, email, and website in this browser for the next time I comment.
                                                    </div>
                                                    <button type="submit" className="back-btn">Submit Comment <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                                                </div>
                                            </div>                                                    
                                        </form>
                                    </div>                                            
                                </div> 
                            </div>
                        </div>                         
                    </div>
                    <div className="col-lg-4 md-mt-60">
                        <div className="react-sidebar ml----30">
                            <div className="widget back-search">
                                <h3 className="widget-title">Search</h3>
                                <form>
                                    <input type="text" name="input" placeholder="Search..." />
                                    <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </button>
                                </form>
                            </div>
                            <div className="widget back-post">
                                <h3 className="widget-title">Popular Posts</h3>
                                <ul className="related-courses">
                                    {posts.map((data, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={`/blog/${data.id}`}>
                                                    <span class="post-images"><img src={require(`../../assets/images/blog/${data.image}`)} alt="post" /></span>
                                                </Link>
                                                <div class="titles">
                                                    <h4>
                                                        <Link to={`/blog/${data.id}`}>{data.title}</Link>
                                                    </h4>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {data.publishedDate}
                                                    </span>
                                                </div>
                                            </li>
                                        )
                                    }).slice(0, 3)}
                                </ul>
                            </div> 
                            <div className="widget react-categories-course">
                                <h3 className="widget-title">Course categories</h3>
                                <ul className="recent-category">
                                    <li> <Link to="#">Art & Design <em>(6)</em></Link></li>
                                    <li> <Link to="#">Exercise <em>(4)</em></Link></li>
                                    <li> <Link to="#">Photography <em>(8)</em></Link></li>
                                    <li> <Link to="#">Environmental Sciences <em>(3)</em></Link></li>
                                    <li> <Link to="#">Software Training <em>(5)</em></Link></li>
                                    <li> <Link to="#">Software Development <em>(2)</em></Link></li>
                                    <li> <Link to="#">Music <em>(10)</em></Link></li>
                                    <li> <Link to="#">Material Design <em>(2)</em></Link></li>
                                    <li> <Link to="#">Technology <em>(7)</em></Link></li>
                                </ul>
                            </div>
                            <div className="widget widget-tags">
                                <h3 className="widget-title">Tags</h3>
                                <ul className="tags">
                                    <li><Link to="#">Education</Link></li>
                                    <li><Link to="#">SEO Marketing</Link></li>
                                    <li><Link to="#">Business</Link></li>
                                    <li><Link to="#">Solutions</Link></li>
                                    <li><Link to="#">UX</Link></li>
                                    <li><Link to="#">Case Study</Link></li>
                                    <li><Link to="#">Creative</Link></li>
                                    <li><Link to="#">Insights</Link></li>
                                </ul>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default BlogMain;