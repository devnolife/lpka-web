import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = (props) => {

  const { parentMenu } = props;

  const location = useLocation();
  const postURL = location.pathname.split('/');
  const pathLength = Number(postURL.length)

  const [home, setHome] = useState(false)
  const [page, setPage] = useState(false)
  const [event, setEvent] = useState(false)
  const [course, setCourse] = useState(false)
  const [blog, setBlog] = useState(false)
  const [layanan, setLayanan] = useState(false) // New state for Layanan menu
  const [prestasi, setPrestasi] = useState(false) // New state for Prestasi menu

  const openMobileMenu = menu => {

    if (menu === 'home') {
      setHome(!home)
      setPage(false)
      setEvent(false)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
    }
    else if (menu === 'page') {
      setHome(false)
      setPage(!page)
      setEvent(false)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
    }
    else if (menu === 'event') {
      setHome(false)
      setPage(false)
      setEvent(!event)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
    }
    else if (menu === 'course') {
      setHome(false)
      setPage(false)
      setEvent(false)
      setCourse(!course)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
    }
    else if (menu === 'berita') {
      setHome(false)
      setPage(false)
      setEvent(false)
      setCourse(false)
      setBlog(!blog)
      setLayanan(false)
      setPrestasi(false)
    }
    else if (menu === 'prestasi') { // New condition for Prestasi menu
      setHome(false)
      setPage(false)
      setEvent(false)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(!prestasi)
    }
  };

  return (
    <>
      <li className={parentMenu === 'page' || parentMenu === 'event' ? 'has-sub menu-active' : 'has-sub'}>
        <Link to="#" className={page ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('page'); }}>
          Profil
          <span className="arrow "></span>
        </Link>
        <ul className={page ? "sub-menu sub-menu-open" : "sub-menu"}>
          <li className={location.pathname === '/visi-misi' ? 'menu-active' : ''}>
            <Link to="/visi-misi">Visi Misi</Link>
          </li>
          <li className={location.pathname === "/pimpinan" ? "menu-active" : ""}>
            <Link to="/pimpinan">Pimpinan</Link>
          </li>
        </ul>
      </li>

      <li className={parentMenu === 'pengumuman' ? 'has-sub menu-active' : 'has-sub'}>
        <Link to="#" className={course ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('course'); }}>
          Pengumuman
        </Link>
      </li>

      <li className={location.pathname === '/berita' ? 'menu-active' : ''}>
        <Link to="/berita">Berita</Link>
      </li>
      <li className={parentMenu === 'prestasi' ? 'has-sub menu-active' : 'has-sub'}>
        <Link to="#" className={prestasi ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('prestasi'); }}>
          Prestasi
          <span className="arrow "></span>
        </Link>
      </li>
      <li className={location.pathname === '/komplen' ? 'menu-active' : ''}>
        <Link to="/komplen">Komplen & Saran</Link>
      </li>
    </>
  );
}

export default MenuItems;
