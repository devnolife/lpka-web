import React  from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CourseSidebarMain from './CourseSidebarMain';
import ScrollToTop from '../../components/ScrollTop';

const CourseSidebar = () => {

    return (
        <body className="courses-grid-page">
            <Header
                parentMenu='course'
            />

            <div class="react-wrapper">
                <div class="react-wrapper-inner">
                    <Breadcrumb
                        pageTitle="Course"
                    />

                    <CourseSidebarMain />

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
            </div>

            <Footer />

        </body>
    );
}

export default CourseSidebar;