import React from 'react';

import SectionTitle from '../../components/SectionTitle'

import SingleService from '../../components/Service/SingleService';


import prestasi from '../../assets/images/service/prestasi.png'
import bakatminat from '../../assets/images/service/bakatminat.png'
import karir from '../../assets/images/service/karir.png'
import wirausaha from '../../assets/images/service/wirausaha.png'

const Service = () => {

  return (
    <div className="react_popular_topics pt---100 pb---70">
      <div className="container">
        <SectionTitle Title="Layanan Devisi LPKA" />
        <div className="row">
          <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.3s">
            <SingleService
              id="1"
              itemImg={prestasi}
              title="Devisi Prestasi & Kreativitas Mahasiswa"
            />
          </div>
          <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.5s">
            <SingleService
              id="2"
              itemImg={wirausaha}
              title="Devisi Kewirausahaan & Kesejahteraan Mahasiswa"
            />
          </div>
          <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.7s">
            <SingleService
              id="3"
              itemImg={bakatminat}
              title="Devisi Bakat Minat & Kelembagaan Mahasiswa"
            />
          </div>
          <div className="col-lg-3 wow animate__fadeInUp" data-wow-duration="0.9s">
            <SingleService
              id="4"
              itemImg={karir}
              title="Devisi Karir Mahasiswa dan Alumni"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
