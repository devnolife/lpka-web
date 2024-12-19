import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CourseListMain from './CourseListMain';
import ScrollToTop from '../../components/ScrollTop';

const CourseList = () => {
    return (
        <body className="courses-list-page">
            <Header
                parentMenu='course'
            />

            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    <Breadcrumb
                        pageTitle="Course List"
                    />

                    <CourseListMain />

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
            </div>

            <Footer />

        </body>
    );
}


export default CourseList;

