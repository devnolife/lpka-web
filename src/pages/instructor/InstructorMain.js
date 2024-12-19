import React from 'react';
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle';

const instructors = [
  {
    "id": 1,
    "image": "1.png",
    "name": "Wahyuddin, S.Pd.,M.Ed",
    "designation": "Kordinator Pengembangan Prestasi & Kreativitas Mahasiswa",
    "bio": "LPKA didedikasikan untuk mendorong pencapaian dan kreativitas mahasiswa.",
  },
  {
    "id": 2,
    "image": "2.png",
    "name": "Hamzah, S.P.,M.P",
    "designation": "Kordinator Keewirausahaan Karir & Beasiswa",
    "bio": "LPKA mendukung kewirausahaan, pengembangan karir, dan beasiswa.",
  },
  {
    "id": 3,
    "image": "3.png",
    "name": "Dr.Ir. Nenny, ST.,MT.,IPM",
    "designation": "Ketua LPKA",
    "bio": "LPKA bertujuan mengembangkan mahasiswa menjadi individu yang berpengetahuan dan percaya diri.",
  },
  {
    "id": 4,
    "image": "4.png",
    "name": "Dr.Dian Pramana Putra S.Pd.,M.Pd",
    "designation": "Sekretaris LPKA",
    "bio": "LPKA berkomitmen mendukung kegiatan mahasiswa dan pengembangan kelembagaan.",
  },
  {
    "id": 5,
    "image": "5.png",
    "name": "Dr.Syahban Nur S.Pd.,M.Pd",
    "designation": "Kordinator Bakat Minat & Kelembagaan Mahasiswa",
    "bio": "LPKA mengembangkan bakat dan keterampilan organisasi mahasiswa.",
  }
]

const InstructorMain = () => {

  return (
    <>
      <div className="instructors___page pt---30 pb---10">
        <SectionTitle Title="Pimpinan LPKA" />
        <div className="container pb---60">
          <div className="row">
            {instructors.slice(0, 5).map((data, index) => {
              return (
                <div className="col-lg">
                  <div className="instructor__content">
                    <div className="instructor__image">
                      <img className="small-image" src={require(`../../assets/images/instructor/${data.image}`)} alt={data.name} />
                      <div className="content__hover">
                        <p>{data.bio}</p>
                        <ul>
                          <li><a href="#"><span aria-hidden="true" className="social_facebook"></span></a></li>
                          <li><a href="#"><span aria-hidden="true" className="social_twitter"></span></a></li>
                          <li><a href="#"><span aria-hidden="true" className="social_linkedin"></span></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="bottom-content">
                      <h4><Link to={`/instructor/${data.id}`}>{data.name}</Link></h4>
                      <p>{data.designation}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorMain;
