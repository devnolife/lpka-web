import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SingleCourseFour from '../../components/Course/SingleCourseFour';


import courses from '../../data/Courses.json';

const Course = () => {
    let tab1 = "See All",
        tab2 = "Trending",
        tab3 = "Featured",
        tab4 = "Popularity",
        tab5 = "Web Design"
        const tabStyle = 'react-filter';

    return (

        <div className="react-course-filter pb---100 pt---120">
            <div className="container">  
                <Tabs>                            
                    <div className="row d-flex align-items-end">
                        <div className="col-lg-5">
                            <div className="react__title__section text-left">
                                <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.3s"> Most Popular Courses </h2>
                                <h6 className="react__subtitle wow animate__fadeInUp" data-wow-duration="0.5s">Why I say old chap that is spiffing in my flat such a fibber mufty.</h6>
                            </div>
                        </div>
                        <div className="col-lg-7 text-right">
                            <TabList className={tabStyle}>
                                <Tab><button>{tab1}</button></Tab>
                                <Tab><button>{tab2}</button></Tab>
                                <Tab><button>{tab3}</button></Tab>
                                <Tab><button>{tab4}</button></Tab>
                                <Tab><button>{tab5}</button></Tab>
                            </TabList>
                        </div>
                    </div>
                    <div>
                        <TabPanel className="row">
                            {courses.map((data, index) => {
                                return (
                                    <div key={index} className="single-studies col-lg-4">
                                        {
                                            <SingleCourseFour
                                                courseID={data.id}
                                                courseImg= {`${data.image}`}
                                                courseTitle= {data.title}
                                                courseName= {data.name}
                                                courseLesson= {data.lesson}
                                                courseEnrolled= {data.enrolled}
                                                coursePrice= {data.price}
                                                courseAuthor= {data.author}
                                                courseAuthorImg= {`${data.authorImg}`}
                                                courseReview= {data.review}
                                            />
                                        }

                                    </div>
                                )
                            }).slice(4, 10)}
                        </TabPanel>
                        <TabPanel className="row">
                            {courses.map((data, index) => {
                                return (
                                    <div key={index} className="single-studies col-lg-4">
                                        {
                                            <SingleCourseFour
                                                courseID={data.id}
                                                courseImg= {`${data.image}`}
                                                courseTitle= {data.title}
                                                courseName= {data.name}
                                                courseLesson= {data.lesson}
                                                courseEnrolled= {data.enrolled}
                                                coursePrice= {data.price}
                                                courseAuthor= {data.author}
                                                courseAuthorImg= {`${data.authorImg}`}
                                                courseReview= {data.review}
                                            />
                                        }

                                    </div>
                                )
                            }).slice(3, 6)}
                        </TabPanel>
                        <TabPanel className="row">
                            {courses.map((data, index) => {
                                return (
                                    <div key={index} className="single-studies col-lg-4">
                                        {
                                            <SingleCourseFour
                                                courseID={data.id}
                                                courseImg= {`${data.image}`}
                                                courseTitle= {data.title}
                                                courseName= {data.name}
                                                courseLesson= {data.lesson}
                                                courseEnrolled= {data.enrolled}
                                                coursePrice= {data.price}
                                                courseAuthor= {data.author}
                                                courseAuthorImg= {`${data.authorImg}`}
                                                courseReview= {data.review}
                                            />
                                        }

                                    </div>
                                )
                            }).slice(0, 2)}
                        </TabPanel>
                        <TabPanel className="row">
                            {courses.map((data, index) => {
                                return (
                                    <div key={index} className="single-studies col-lg-4">
                                        {
                                            <SingleCourseFour
                                                courseID={data.id}
                                                courseImg= {`${data.image}`}
                                                courseTitle= {data.title}
                                                courseName= {data.name}
                                                courseLesson= {data.lesson}
                                                courseEnrolled= {data.enrolled}
                                                coursePrice= {data.price}
                                                courseAuthor= {data.author}
                                                courseAuthorImg= {`${data.authorImg}`}
                                                courseReview= {data.review}
                                            />
                                        }

                                    </div>
                                )
                            }).slice(2, 4)}
                        </TabPanel>
                        <TabPanel className="row">
                            {courses.map((data, index) => {
                                return (
                                    <div key={index} className="single-studies col-lg-4">
                                        {
                                            <SingleCourseFour
                                                courseID={data.id}
                                                courseImg= {`${data.image}`}
                                                courseTitle= {data.title}
                                                courseName= {data.name}
                                                courseLesson= {data.lesson}
                                                courseEnrolled= {data.enrolled}
                                                coursePrice= {data.price}
                                                courseAuthor= {data.author}
                                                courseAuthorImg= {`${data.authorImg}`}
                                                courseReview= {data.review}
                                            />
                                        }

                                    </div>
                                )
                            }).slice(3, 6)}
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

export default Course;