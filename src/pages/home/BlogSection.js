import React from 'react';
import SectionTitle from '../../components/SectionTitle'
import SinglePost from '../../components/Blog/SinglePost';
import berita from '../../data/Berita.json';
const KabarMahasiswa = () => {

  return (
    <>
      <div className="react-blog__area blog__area pt---120 pb---120 graybg-home">
        <div className="container blog__width">
          <SectionTitle Title="Kabar Mahasiswa" />
          <div className="row">
            {berita.map((data, index) => {
              return (
                <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 wow animate__fadeInUp" data-wow-duration="0.3s">
                  {
                    <SinglePost
                      blogID={data.id}
                      blogImage={`${data.image}`}
                      blogTitle={data.title}
                      blogPublishedDate={data.publishedDate}
                      blogCategory={data.category}
                    />
                  }

                </div>
              )
            }).slice(0, 4)}
          </div>
        </div>
      </div>
    </>
  );

}

export default KabarMahasiswa;
