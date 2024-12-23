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
  const [devisi, setDevisi] = useState(false); // New state for Devisi menu
  const [informasi, setInformasi] = useState(false); // New state for Informasi menu

  const openMobileMenu = menu => {

    if (menu === 'home') {
      setHome(!home)
      setPage(false)
      setEvent(false)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
      setDevisi(false)
      setInformasi(false)
    }
    else if (menu === 'page') {
      setHome(false)
      setPage(!page)
      setEvent(false)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
      setDevisi(false)
      setInformasi(false)
    }
    else if (menu === 'event') {
      setHome(false)
      setPage(false)
      setEvent(!event)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
      setDevisi(false)
      setInformasi(false)
    }
    else if (menu === 'course') {
      setHome(false)
      setPage(false)
      setEvent(false)
      setCourse(!course)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
      setDevisi(false)
      setInformasi(false)
    }
    else if (menu === 'berita') {
      setHome(false)
      setPage(false)
      setEvent(false)
      setCourse(false)
      setBlog(!blog)
      setLayanan(false)
      setPrestasi(false)
      setDevisi(false)
      setInformasi(false)
    }
    else if (menu === 'prestasi') { // New condition for Prestasi menu
      setHome(false)
      setPage(false)
      setEvent(false)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(!prestasi)
      setDevisi(false)
      setInformasi(false)
    }
    else if (menu === 'devisi') { // New condition for Devisi menu
      setHome(false)
      setPage(false)
      setEvent(false)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
      setDevisi(!devisi)
      setInformasi(false)
    }
    else if (menu === 'informasi') { // New condition for Informasi menu
      setHome(false)
      setPage(false)
      setEvent(false)
      setCourse(false)
      setBlog(false)
      setLayanan(false)
      setPrestasi(false)
      setDevisi(false)
      setInformasi(!informasi)
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

      <li className={parentMenu === 'devisi' ? 'has-sub menu-active' : 'has-sub'}>
        <Link to="#" className={devisi ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('devisi'); }}>
          Layanan
          <span className="arrow "></span>
        </Link>
        <ul className={devisi ? "sub-menu sub-menu-open" : "sub-menu"}>
          <li className={location.pathname === '/devisi/1' ? 'menu-active' : ''}>
            <Link to="/devisi/1">Prestasi Kreativitas Mahasiswa</Link>
          </li>
          <li className={location.pathname === "/devisi/2" ? "menu-active" : ""}>
            <Link to="/devisi/2">Kewirausahaan & Kesejahteraan Mahasiswa</Link>
          </li>
          <li className={location.pathname === "/devisi/3" ? "menu-active" : ""}>
            <Link to="/devisi/3">Bakat Minat & Kelembangaan Mahasiswa</Link>
          </li>
          <li className={location.pathname === "/devisi/4" ? "menu-active" : ""}>
            <Link to="/devisi/4">Karir Mahasiswa & Alumni</Link>
          </li>
        </ul>
      </li>
      <li className={parentMenu === 'informasi' ? 'has-sub menu-active' : 'has-sub'}>
        <Link to="#" className={informasi ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('informasi'); }}>
          Informasi
          <span className="arrow "></span>
        </Link>
        <ul className={informasi ? "sub-menu sub-menu-open" : "sub-menu"}>
          <li className={location.pathname === '/beasiswa' ? 'menu-active' : ''}>
            <Link to="/beasiswa">Beasiswa</Link>
          </li>
          <li className={location.pathname === "/pengumuman" ? "menu-active" : ""}>
            <Link to="/pengumuman">Pengumuman</Link>
          </li>
        </ul>
      </li>

      <li className={location.pathname === '/berita' ? 'menu-active' : ''}>
        <Link to="/berita">Berita</Link>
      </li>

      <li className={location.pathname === '/komplen' ? 'menu-active' : ''}>
        <Link to="/komplen">Komplen & Saran</Link>
      </li>
    </>
  );
}

export default MenuItems;
