import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Preloader from "../components/Preloader";
import Home from '../pages/home';
import About from '../pages/visi-misi';
import Pimpinan from '../pages/pimpinan';
import Event from '../pages/event';
import EventSidebar from '../pages/event/event-sidebar';
import EventDetails from '../pages/event/event-details';
import Berita from '../pages/berita';
import BlogDetails from '../pages/berita/berita-details';
import Login from '../pages/authentication/login';
import Signup from '../pages/authentication/signup';
import Komplen from '../pages/komplen';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'
import Pengumuman from "../pages/pengumuman";


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
          <Route path="/berita" exact element={<Berita />} />
          <Route path="/berita/:id" element={<BlogDetails />} />
          <Route path="/event" exact element={<Event />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/event-sidebar" element={<EventSidebar />} />
          <Route path="/pengumuman" exact element={<Pengumuman />} />
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
