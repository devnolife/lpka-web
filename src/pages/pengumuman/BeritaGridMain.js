import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import SingleCourseThree from '../../components/Course/SingleCourseThree';
import courses from '../../data/Courses.json';

const BeritaGridMain = () => {

  return (
    <div className="react-course-filter back__course__page_grid pb---40 pt---110">
      <div className="container pb---70">
        <div className="row">
          {courses.map((data, index) => {
            return (
              <div key={index} className="col-lg-4">
                {
                  <SingleCourseThree
                    courseID={data.id}
                    courseImg={`${data.image}`}
                    courseTitle={data.title}
                    courseName={data.name}
                    courseAuthor={data.author}
                    courseType={data.type}
                    courseLesson={data.lesson}
                    courseDuration={data.duration}
                    courseEnrolled={data.enrolled}
                    coursePrice={data.price}
                    courseReview={data.review}
                  />
                }
              </div>
            )
          })}
        </div>
        <ul className="back-pagination pt---20">
          <li><Link to="#">1</Link></li>
          <li><Link to="#">2</Link></li>
          <li className="back-next"><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default BeritaGridMain;
