import React  from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb/CourseBreadcrumbs';
import CourseDetailsMain from './CourseDetailsMain';
import ScrollToTop from '../../components/ScrollTop';
import courses from '../../data/Courses.json';

import Logo from '../../assets/images/logos/logo2.png';

const CourseDetails = () => {

    const location = useLocation();
    const courseURL = location.pathname.split('/'); 
    
    const course = courses.find((b) => b.id === Number(courseURL[2]));
    const flatPrice = course.price.split('.');
    const flatPriceRegular = course.regularPrice.split('.');

    return (
        <body className="course-single">
            <Header
                parentMenu='course'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />

            <div class="react-wrapper">
                <div class="react-wrapper-inner">
                    <Breadcrumb
                        courseBannerImg= {`${course.bannerImg}`}
                        courseTitle= {course.title}
                        courseName= {course.name}
                        courseAuthor= {course.author}
                        courseAuthorImg= {course.authorImg}
                        courseLesson= {course.lesson}
                        courseEnrolled= {course.enrolled}
                    />

                    <CourseDetailsMain
                        courseID={course.id}
                        courseImg= {`${course.image}`}
                        courseTitle= {course.title}
                        courseName= {course.name}
                        courseAuthor= {course.author}
                        courseAuthorImg= {course.authorImg}
                        courseLesson= {course.lesson}
                        courseDuration= {course.duration}
                        courseEnrolled= {course.enrolled}
                        coursePrice= {flatPrice[0]}
                        courseRegularPrice= {flatPriceRegular[0]}
                        courseLanguage= {course.language}
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

export default CourseDetails;