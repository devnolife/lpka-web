import React from 'react';
import { Link } from 'react-router-dom'

const instructors = [
  {
    "id": 1,
    "image": "1.png",
    "name": "Dr.Ir. Nenny, ST.,MT.,IPM",
    "designation": "Ketua LPKA",
    "bio": "Why I say old chap that is spiffing he legged easy peasy.",
    "phone": "+(088) 223 478 365",
    "email": "douglas@echooling.com",
    "height": "170 cm",
    "weight": "65 kg"
  },
  {
    "id": 2,
    "image": "2.png",
    "name": "Dr. Dian Pramana Putra, S.Pd.,M",
    "designation": "Lead Teacher",
    "bio": "Why I say old chap that is spiffing he legged easy peasy.",
    "phone": "+(088) 223 478 365",
    "email": "eleanor@echooling.com",
    "height": "175 cm",
    "weight": "70 kg"
  },
  {
    "id": 3,
    "image": "3.png",
    "name": "Magnus Lee",
    "designation": "Administration",
    "bio": "Why I say old chap that is spiffing he legged easy peasy.",
    "phone": "+(088) 223 478 365",
    "email": "magnus@echooling.com",
    "height": "180 cm",
    "weight": "75 kg"
  },
  {
    "id": 4,
    "image": "4.png",
    "name": "Hanson Deck",
    "designation": "Professor",
    "bio": "Why I say old chap that is spiffing he legged easy peasy.",
    "phone": "+(088) 223 478 365",
    "email": "hanson@echooling.com",
    "height": "165 cm",
    "weight": "60 kg"
  },
  {
    "id": 5,
    "image": "5.png",
    "name": "Becky Curry",
    "designation": "Teacher",
    "bio": "Why I say old chap that is spiffing he legged easy peasy.",
    "phone": "+(088) 223 478 365",
    "email": "becky@echooling.com",
    "height": "160 cm",
    "weight": "55 kg"
  }
]

const InstructorMain = () => {

  return (
    <>
      <div className="instructors___page pt---120 pb---140">
        <div className="container pb---60">
          <div className="row">
            {instructors.slice(0, 5).map((data, index) => {
              return (
                <div className="col-lg-3">
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
