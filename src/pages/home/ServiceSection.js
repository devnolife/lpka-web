import React from 'react';

import SectionTitle from '../../components/SectionTitle'

import SingleService from '../../components/Service/SingleService';

import serviceImg1 from '../../assets/images/service/1.png'
import serviceImg2 from '../../assets/images/service/2.png'
import serviceImg3 from '../../assets/images/service/3.png'
import serviceImg4 from '../../assets/images/service/4.png'
import prestasi from '../../assets/images/service/prestasi.png'

const Service = () => {

  return (
    <div className="react_popular_topics pt---100 pb---70">
      <div className="container">
        <SectionTitle Title="Layanan Devisi LPKA" />
        <div className="row">
          <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.3s">
            <SingleService
              itemImg={prestasi}
              title="Devisi Prestasi & Kreativitas Mahasiswa"
            />
          </div>
          <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.5s">
            <SingleService
              itemImg={serviceImg2}
              title="Devisi Kewirausahaan & Kesejahteraan Mahasiswa"
            />
          </div>
          <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.7s">
            <SingleService
              itemImg={serviceImg3}
              title="Devisi Bakat Minat & Kelembagaan Mahasiswa"
            />
          </div>
          <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.9s">
            <SingleService
              itemImg={serviceImg4}
              title="Devisi Karir Mahasiswa dan Alumni"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
