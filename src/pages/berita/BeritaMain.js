import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    "id": 1,
    "image": "blog-1.jpeg",
    "category": "Pendidikan",
    "title": "PPK Ormawa LKIM-PENA Unismuh Gandeng Pemdes Tanakeke Tanam 1.000 Mangrove untuk Lawan Abrasi dan Banjir Rob",
    "publishedDate": "22 July 2024",
    "totalView": "77",
    "description": "Mengapa saya mengatakan sobat lama itu sangat bagus di flat saya, seperti pembohong besar, hanya satu pound, apa sampah yang bagus.",
    "author": "John Doe",
    "authorImg": "author.png"
  },
  {
    "id": 2,
    "image": "blog-2.jpg",
    "category": "Pendidikan",
    "title": "LKIM-PENA Usulkan 6 Program Desa Maritim Unggul Tompotanah kepada Pemkab Takalar",
    "publishedDate": "22 July 2024",
    "totalView": "77",
    "description": "Mengapa saya mengatakan sobat lama itu sangat bagus di flat saya, seperti pembohong besar, hanya satu pound, apa sampah yang bagus.",
    "author": "Jane Smith",
    "authorImg": "author2.png"
  },
  {
    "id": 3,
    "image": "blog-3.jpeg",
    "category": "Pendidikan",
    "title": "LPKA UNISMUH MAKASSAR MELAKSANAKAN BIMTEK PPK ORMAWA 2024",
    "publishedDate": "08 March 2024",
    "totalView": "77",
    "description": "Mengapa saya mengatakan sobat lama itu sangat bagus di flat saya, seperti pembohong besar, hanya satu pound, apa sampah yang bagus.",
    "author": "Alice Johnson",
    "authorImg": "author3.png"
  },
  {
    "id": 4,
    "image": "blog-4.jpeg",
    "category": "Pendidikan",
    "title": "Tapak Suci Unismuh Makassar Raih Juara Umum II di Kejuaraan Pencak Silat Makassar Championship",
    "publishedDate": "06 January 2024",
    "totalView": "77",
    "description": "Mengapa saya mengatakan sobat lama itu sangat bagus di flat saya, seperti pembohong besar, hanya satu pound, apa sampah yang bagus.",
    "author": "Bob Brown",
    "authorImg": "author4.png"
  }
]

const BeritaMain = () => {

  return (
    <div className="react-blog-page pb---40 pt---110">
      <div className="container pb---70">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-grid">
              {posts.map((data, index) => {
                return (
                  <div key={index} className="single-blog">
                    <div className="inner-blog">
                      <div className="blog-img">
                        <Link to={`/blog/${data.id}`} className="cate">{data.category}</Link>
                        <img src={require(`../../assets/images/blog/${data.image}`)} alt={data.title} />
                      </div>
                      <div className="blog-content">
                        <ul className="top-part">
                          <li>
                            <img src={require(`../../assets/images/course/${data.authorImg}`)} alt="user" /> {data.author}
                          </li>
                          <li className="date-part">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {data.publishedDate}
                          </li>
                          <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> {data.totalView} tampilan
                          </li>
                        </ul>

                        <h3 className="blog-title"><Link to={`/blog/${data.id}`}>{data.title}</Link></h3>
                        <p className="blog-desc">{data.description}</p>
                        <div className="button__sec">
                          <Link to={`/blog/${data.id}`} className="blog-btn">Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                          <div className="share-course">
                            Bagikan Postingan <em><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></em>
                            <span>
                              <Link to="#"><i aria-hidden="true" className="social_facebook"></i></Link>
                              <Link to="#"><i aria-hidden="true" className="social_twitter"></i></Link>
                              <Link to="#"><i aria-hidden="true" className="social_linkedin"></i></Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }).slice(0, 3)}

              {/* {posts.map((data, index) => {
                return (
                  <div key={index} className="single-blog">
                    <div className="inner-blog">
                      <div className="blog-img">
                        <Link to={`/blog/${data.id}`} className="cate">{data.category}</Link>
                        <img src={require(`../../assets/images/blog/${data.image}`)} alt={data.title} />
                      </div>
                      <div className="blog-content">
                        <ul className="top-part">
                          <li>
                            <img src={require(`../../assets/images/course/${data.authorImg}`)} alt="user" /> {data.author}
                          </li>
                          <li className="date-part">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {data.publishedDate}
                          </li>
                          <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> {data.totalView} tampilan
                          </li>
                        </ul>

                        <h3 className="blog-title"><Link to={`/blog/${data.id}`}>{data.title}</Link></h3>
                        <p className="blog-desc">{data.description}</p>
                        <div className="button__sec">
                          <Link to={`/blog/${data.id}`} className="blog-btn">Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                          <div className="share-course">
                            Bagikan Postingan <em><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></em>
                            <span>
                              <Link to="#"><i aria-hidden="true" className="social_facebook"></i></Link>
                              <Link to="#"><i aria-hidden="true" className="social_twitter"></i></Link>
                              <Link to="#"><i aria-hidden="true" className="social_linkedin"></i></Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }).slice(0, 3)} */}

              <blockquote className="block__link_q">Mereka adalah penyedia dan mereka adalah pemimpin dan periode ini dalam sejarah akan menyoroti.</blockquote>

              {/* {posts.map((data, index) => {
                return (
                  <div key={index} className="single-blog">
                    <div className="inner-blog">
                      <div className="blog-img">
                        <Link to={`/blog/${data.id}`} className="cate">{data.category}</Link>
                        <img src={require(`../../assets/images/blog/${data.image}`)} alt={data.title} />
                      </div>
                      <div className="blog-content">
                        <ul className="top-part">
                          <li>
                            <img src={require(`../../assets/images/course/${data.authorImg}`)} alt="user" /> {data.author}
                          </li>
                          <li className="date-part">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {data.publishedDate}
                          </li>
                          <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> {data.totalView} tampilan
                          </li>
                        </ul>

                        <h3 className="blog-title"><Link to={`/blog/${data.id}`}>{data.title}</Link></h3>
                        <p className="blog-desc">{data.description}</p>
                        <div className="button__sec">
                          <Link to={`/blog/${data.id}`} className="blog-btn">Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                          <div className="share-course">
                            Bagikan Postingan <em><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></em>
                            <span>
                              <Link to="#"><i aria-hidden="true" className="social_facebook"></i></Link>
                              <Link to="#"><i aria-hidden="true" className="social_twitter"></i></Link>
                              <Link to="#"><i aria-hidden="true" className="social_linkedin"></i></Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }).slice(0, 3)} */}
            </div>

            <ul className="back-pagination">
              <li><Link to="#">1</Link></li>
              <li><Link to="#">2</Link></li>
              <li className="back-next"><Link to="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="react-sidebar ml----30">
              <div className="widget back-search">
                <h3 className="widget-title">Cari</h3>
                <form>
                  <input type="text" name="input" placeholder="Cari..." />
                  <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </button>
                </form>
              </div>
              <div className="widget back-post">
                <h3 className="widget-title">Postingan Populer</h3>
                <ul className="related-courses">
                  {posts.map((data, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/blog/${data.id}`}>
                          <span class="post-images"><img src={require(`../../assets/images/blog/${data.image}`)} alt="post" /></span>
                        </Link>
                        <div class="titles">
                          <h4>
                            <Link to={`/blog/${data.id}`}>{data.title}</Link>
                          </h4>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {data.publishedDate}
                          </span>
                        </div>
                      </li>
                    )
                  }).slice(0, 3)}
                </ul>
              </div>
              <div className="widget widget-tags">
                <h3 className="widget-title">Tag</h3>
                <ul className="tags">
                  <li><Link to="#">Pendidikan</Link></li>
                  <li><Link to="#">Studi Kasus</Link></li>
                  <li><Link to="#">Kreatif</Link></li>
                  <li><Link to="#">Wawasan</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeritaMain;
