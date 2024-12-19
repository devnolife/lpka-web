import React from 'react';
import Blog from './BlogSection';
import About from './AboutSection';
import Topics from './TopicsSection';
import HomeBanner from './BannerSection';
import Instructor from './InstructorSection';
import FaqPart from './FaqSection';
import Course from './CourseSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/ScrollTop';

const HomeTwoMain =() => {
		return (
			<>
				<div className="react-wrapper">
            		<div className="react-wrapper-inner">
						{/* BannerSection-start */}
						<HomeBanner />
						{/* BannerSection-start */}

						{/* Topics-area-start */}
						<Topics />
						{/* Topics-area-end */}

						{/* About-area-start */}
						<About />
						{/* About-area-end */}

						{/* Course-area-start */}
						<Course />
						{/* Course-area-end */}

						{/* Faq-area-start */}
						<FaqPart />
						{/* Faq-area-end */}

						{/* Instructor-area-start */}
						<Instructor />
						{/* Instructor-area-end */}

						{/* testmonial-area-start */}
						<Testimonial />
						{/* testmonial-area-end */}

						{/* blog-area-start */}
						<Blog />
						{/* blog-area-end */}

						{/* scrolltop-start */}
						<ScrollToTop />
						{/* scrolltop-end */}
					</div>
				</div>

			</>
		);
	}

export default HomeTwoMain;