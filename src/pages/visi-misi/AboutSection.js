import React from 'react';
import { Link } from 'react-router-dom';

import aboutImg from '../../assets/images/about/ab.png'
import shapeImg from '../../assets/images/about/badge.png'

const VisiMisi = () => {

  return (
    <div className="about__area about__area_one p-relative pt---30 pb---50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about__image wow animate__fadeInUp" data-wow-duration="0.3s">
              <img src={aboutImg} alt="About" />
              <img className="react__shape__ab" src={shapeImg} alt="Shape Image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content">
              <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Visi Misi<br /> <em>Lembaga Kemahasiswaan & Pengembangan Mahasiswa</em></h2>
              <h3 className="wow animate__fadeInUp" data-wow-duration="0.3s">Visi</h3>
              <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Menjadi lembaga profesional di tingkat nasional dalam pengembangan kemahasiswaan dan alumni untuk <br /> terwujudnya mahasiswa dan lulusan yang unggul dan islami.</p>
              <h3 className="wow animate__fadeInUp" data-wow-duration="0.3s">Misi</h3>
              <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">
                1.Mengembangkan kreativitas dan prestasi mahasiswa <br />
                2.Mengembangkan minat, bakat, dan kelembagaan mahasiswa<br />
                3.Mengembangkan jiwa kewirausahaan dan karir mahasiswa untuk dapat bersaing di pasar kerja<br />
                4.Meningkatkan kesempatan mahasiswa dalam mendapatkan peluang beasiswa, insentif kesejahteraan dan layanan kesehatan mahasiswa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;
