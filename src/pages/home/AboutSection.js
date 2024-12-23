import { Link } from 'react-router-dom';

// Image
import aboutImg from '../../assets/images/about/about3.jpg';
import aboutBadge from '../../assets/images/about/badge2.png';

const About = () => {

  return (
    <div className="about__area about__area_one p-relative pt---10 pb---120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about__image">
              <img src={aboutImg} alt="Tentang" />
              {/* <img className="react__shape__ab" src={aboutBadge} alt="Gambar Bentuk" /> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content">
              <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s">Selamat Datang di <br /> <em>Platform LPKA</em></h2>
              <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Lembaga Pengembangan Kemahasiswaan dan Alumni (LPKA) Universitas Muhammadiyah Makassar adalah unit pendukung yang dibentuk untuk mengembangkan kegiatan mahasiswa yang mampu mendukung terwujudnya cendekiawan muslim yang berakhlak mulia, berkompeten, percaya diri, serta mampu mengembangkan ilmu pengetahuan dan teknologi yang bermanfaat bagi umat, bangsa, dan kemanusiaan.</p>
              <p className="about__paragraph2 wow animate__fadeInUp" data-wow-duration="0.7s"> Punya pertanyaan?  <Link to="#"> Dapatkan Panduan Gratis </Link></p>
              <p className="wow animate__fadeInUp" data-wow-duration="0.6s">LPKA diharapkan tidak hanya menjalankan fungsi pelayanan, tetapi juga pengembangan program.</p>
              <ul className="wow animate__fadeInUp" data-wow-duration="0.9s">
                <li><Link to="/visi-misi" className="more-about"> Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                <li className="last-li">
                  <Link to="/">lpka@unismuh.ac.id</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
