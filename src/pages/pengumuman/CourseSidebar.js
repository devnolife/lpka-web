import React  from 'react';

import { Link } from 'react-router-dom';
import courses from '../../data/Courses.json';

const CourseSidebarPart = () => {

    return (
        <div className="react-sidebar ml----30">
            <div className="widget back-search">
                <h3 className="widget-title">Search</h3>
                <form>
                    <input type="text" name="input" placeholder="Search..." />
                    <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </button>
                </form>
            </div>
            <div className="widget back-category">
                <h3 className="widget-title">Filter by category</h3>
                <ul className="recent-category">
                    <li> 
                        <input type="checkbox" id="fruit1" name="fruit-1" value="Featured" />
                        <label for="fruit1">Featured courses <span className="category-count">(8)</span></label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit2" name="fruit-2" value="Education" />
                        <label for="fruit2">Education <span className="category-count">(5)</span></label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit3" name="fruit-3" value="Business" />
                        <label for="fruit3">Business <span className="category-count">(3)</span></label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit4" name="fruit-4" value="Management" />
                        <label for="fruit4">IT Management <span className="category-count">(7)</span></label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit5" name="fruit-5" value="Development" />
                        <label for="fruit5">Development <span className="category-count">(6)</span></label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit6" name="fruit-6" value="Creative" />
                        <label for="fruit6">Creative <span className="category-count">(2)</span></label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit77" name="fruit-77" value="Design" />
                        <label for="fruit77">Art & Design <span className="category-count">(9)</span></label>
                    </li>
                </ul>                                      
            </div> 
            <div className="widget back-category">
                <h3 className="widget-title">Skill Level</h3>
                <ul className="recent-category">
                    <li> 
                        <input type="checkbox" id="fruit7" name="fruit-7" value="all" />
                        <label for="fruit7">Beginner</label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit8" name="fruit-8" value="Free Courses" />
                        <label for="fruit8">Intermediate</label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit9" name="fruit-9" value="Premium Courses" />
                        <label for="fruit9">Advanced</label>
                    </li>                                           
                </ul>                                      
            </div> 
            <div className="widget back-category back-price">
                <h3 className="widget-title">Price</h3>
                <ul className="recent-category">
                    <li> 
                        <input type="checkbox" id="fruit10" name="fruit-10" value="Free Courses" />
                        <label for="fruit10">Free Courses</label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit11" name="fruit-11" value="Paid Courses" />
                        <label for="fruit11"> Paid Courses </label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit12" name="fruit-12" value="Only Subscription" />
                        <label for="fruit12"> Only Subscription </label>
                    </li>                         
                </ul>                                      
            </div> 
            <div className="widget back-post">
                <h3 className="widget-title">Popular Courses</h3>
                <ul className="related-courses">
                    {courses.map((data, index) => {
                        return (
                            <li>
                                <Link to={`/course/${data.id}`}>
                                    <span className="post-images"><img src={require(`../../assets/images/course/${data.image}`)} alt={data.title} /></span>
                                </Link>
                                <div className="titles">                                                    
                                    <h4><Link to={`/course/${data.id}`}>{data.title}</Link></h4>
                                    <span>{data.price}</span>
                                </div>
                            </li>
                            )
                        }).slice(0, 3)
                    }                                          
                </ul>
            </div> 
            <div className="widget back-category back-rating">
                <h3 className="widget-title">Rating</h3>
                <ul className="recent-category">
                    <li> 
                        <input type="checkbox" id="fruit111" name="fruit-111" value="4.5 & up" />
                        <label for="fruit111">
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star_alt"></i>
                        <em>4.5 & up</em></label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit112" name="fruit-112" value="3.5 & up" />
                        <label for="fruit112">
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star_alt"></i>
                            <i className="icon_star_alt"></i>                                                    
                        <em>3.0 & up</em> </label>
                    </li>
                    <li> 
                        <input type="checkbox" id="fruit123" name="fruit-123" value="4.6 & up" />
                        <label for="fruit123"> 
                            <i className="icon_star"></i>
                            <i className="icon_star"></i>
                            <i className="icon_star_alt"></i>
                            <i className="icon_star_alt"></i>
                            <i className="icon_star_alt"></i> <em>2.0 & up </em>
                        </label>
                    </li> 
                </ul>                                      
            </div>                                  
        </div> 
    );
}

export default CourseSidebarPart;