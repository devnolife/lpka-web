import React from 'react';
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle';

const instructors = [
  {
    "id": 1,
    "image": "1.png",
    "name": "Wahyuddin, S.Pd., M.Ed",
    "designation": "Ketua Divisi Pengembangan Prestasi & Kreativitas Mahasiswa",
    "bio": "LPKA didedikasikan untuk mendorong pencapaian dan kreativitas mahasiswa.",
    "schoolar": "https://scholar.google.com/citations?user=cz7WTCcAAAAJ&hl=id",
    "facebook": "https://www.facebook.com/Wahyuddin",
    "instagram": "https://www.instagram.com/Wahyuddin_09",
  },
  {
    "id": 2,
    "image": "2.1.png",
    "name": "Dr. Hamzah, S.P., M.P",
    "designation": "Ketua Divisi Keewirausahaan Karir & Beasiswa",
    "bio": "LPKA mendukung kewirausahaan, pengembangan karir, dan beasiswa.",
    "schoolar": "",
    "facebook": "https://www.facebook.com/hamza.esa.flowers",
    "instagram": "https://www.instagram.com/esa_flowers",
  },
  {
    "id": 3,
    "image": "3.png",
    "name": "Dr. Ir. Nenny, ST.,MT., IPM",
    "designation": "Ketua LPKA",
    "bio": "LPKA bertujuan mengembangkan mahasiswa menjadi individu yang berpengetahuan dan percaya diri.",
    "schoolar": "https://scholar.google.com/citations?view_op=list_works&hl=id&user=p8IG8GAAAAAJ",
    "facebook": "",
    "instagram": "",
  },
  {
    "id": 4,
    "image": "4.png",
    "name": "Dr. Dian Pramana Putra, S.Pd., M.Pd",
    "designation": "Sekretaris LPKA",
    "bio": "LPKA berkomitmen mendukung kegiatan mahasiswa dan pengembangan kelembagaan.",
    "schoolar": "https://scholar.google.com/citations?hl=id&user=RgXZ5ZgAAAAJ",
    "facebook": "https://www.facebook.com/dian.pramana.putra",
    "instagram": "https://www.instagram.com/dianpramanaputra06/",
  },
  {
    "id": 5,
    "image": "4.1.png",
    "name": "Dr. Syahban Nur, S.Pd., M.Pd",
    "designation": "Ketua Divisi Pengembangan Minat Bakat & Kelembagaan Mahasiswa",
    "bio": "LPKA mengembangkan bakat dan keterampilan organisasi mahasiswa.",
    "schoolar": "https://scholar.google.com/citations?user=uEHQ-CkAAAAJ&hl=en",
    "facebook": "https://www.facebook.com/SyahNur.Sosiologi",
    "instagram": "https://www.instagram.com/syahbannur7",
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
                          <li><a href={data.schoolar}><span aria-hidden="true" className="social_googleplus"></span></a></li>
                          <li><a href={data.facebook}><span aria-hidden="true" className="social_facebook"></span></a></li>
                          <li><a href={data.instagram}><span aria-hidden="true" className="social_instagram"></span></a></li>
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
