import React from 'react';
import SectionTitle from '../../components/SectionTitle'
import SinglePost from '../../components/Blog/SinglePost';

const berita = [
  {
    "id": 1,
    "image": "blog-1.jpeg",
    "category": "Pendidikan",
    "title": "PPK Ormawa LKIM-PENA Unismuh Gandeng Pemdes Tanakeke Tanam 1.000 Mangrove untuk Lawan Abrasi dan Banjir Rob",
    "publishedDate": "22 July 2024",
    "totalView": "77",
    "description": "Mengapa saya mengatakan sobat lama itu sangat bagus di flat saya, seperti pembohong besar, hanya satu pound, apa sampah yang bagus."
  },
  {
    "id": 2,
    "image": "blog-2.jpg",
    "category": "Pendidikan",
    "title": "LKIM-PENA Usulkan 6 Program Desa Maritim Unggul Tompotanah kepada Pemkab Takalar",
    "publishedDate": "22 July 2024",
    "totalView": "77",
    "description": "Mengapa saya mengatakan sobat lama itu sangat bagus di flat saya, seperti pembohong besar, hanya satu pound, apa sampah yang bagus."
  },
  {
    "id": 3,
    "image": "blog-3.jpeg",
    "category": "Pendidikan",
    "title": "LPKA UNISMUH MAKASSAR MELAKSANAKAN BIMTEK PPK ORMAWA 2024",
    "publishedDate": "08 March 2024",
    "totalView": "77",
    "description": "Mengapa saya mengatakan sobat lama itu sangat bagus di flat saya, seperti pembohong besar, hanya satu pound, apa sampah yang bagus."
  },
  {
    "id": 4,
    "image": "blog-4.jpeg",
    "category": "Pendidikan",
    "title": "Tapak Suci Unismuh Makassar Raih Juara Umum II di Kejuaraan Pencak Silat Makassar Championship",
    "publishedDate": "06 January 2024",
    "totalView": "77",
    "description": "Mengapa saya mengatakan sobat lama itu sangat bagus di flat saya, seperti pembohong besar, hanya satu pound, apa sampah yang bagus."
  },
]

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
