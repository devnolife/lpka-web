import React from 'react';
import { Link } from 'react-router-dom'


const instructors =
  [
    {
      "id": 9,
      "image": "9.png",
      "name": "Syamsul SE.M.Si.",
      "designation": "Kordinator Devisi",
    },
    {
      "id": 10,
      "image": "10.png",
      "name": "Reski Dian Utami, S.Ak",
      "designation": "Kordinator Devisi",
    },
    {
      "id": 11,
      "image": "11.png",
      "name": "Hasriati, S. SOS",
      "designation": "Kordinator Devisi",
    },
    {
      "id": 12,
      "image": "12.png",
      "name": "Jumria K, S. IP",
      "designation": "Kordinator Devisi",
    },
    {
      "id": 13,
      "image": "13.jpg",
      "name": "Alan Fresco",
      "designation": "Teacher",
      "bio": "Why I say old chap that is spiffing he legged easy peasy.",
      "phone": "+(088) 223 478 365",
      "email": "alan@echooling.com"
    },
  ]

const InstructorSection = () => {

  return (
    <div className="instructor__area pb---85 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-sm-6">
            <div className="instructor__content instructor__content-one">
              <div className="instructors_lefts">
                <h2 className="wow animate__fadeInUp" data-wow-duration="0.3s">Staf Lembaga Pengembangan <br /> Kemahasiswaan dan Alumni</h2>
              </div>
            </div>
          </div>
          {instructors.map((data, index) => {
            return (
              <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="instructor__content">
                  <div className="instructor__content-1 larger-image">
                    <img src={require(`../../assets/images/instructor/${data.image}`)} alt={data.title} />
                  </div>
                  <div className="instructor__content-2">
                    <h4>
                      <Link to={`/instructor/${data.id}`}>{data.name}</Link>
                    </h4>
                    <p>{data.designation}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;