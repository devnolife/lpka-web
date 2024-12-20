import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Preloader from "../components/Preloader";

//Custom Components

import Home from '../pages/home';
import About from '../pages/visi-misi';
import Course from '../pages/course';
import CourseList from '../pages/course/course-list';
import CourseDetails from '../pages/course/course-details';
import CourseSidebar from '../pages/course/course-sidebar';
import Pimpinan from '../pages/pimpinan';
import Event from '../pages/event';
import EventSidebar from '../pages/event/event-sidebar';
import EventDetails from '../pages/event/event-details';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog/blog-details';
import Login from '../pages/authentication/login';
import Signup from '../pages/authentication/signup';
import Komplen from '../pages/komplen';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className='App'>
      {isLoading ?
        <Preloader /> : ''
      }
      <>
        <LoadTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/visi-misi" element={<About />} />
          <Route path="/course" exact element={<Course />} />
          <Route path="/course-list" exact element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/course-sidebar" element={<CourseSidebar />} />
          <Route path="/event" exact element={<Event />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/event-sidebar" element={<EventSidebar />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/pimpinan" exact element={<Pimpinan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/komplen" element={<Komplen />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
