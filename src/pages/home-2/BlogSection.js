import React from 'react';

import SectionTitle from '../../components/SectionTitle'
import SinglePost from '../../components/Blog/SinglePost';

import posts from '../../data/Posts.json';

const Blog = () => {

    return (
        <>
            <div className="react-blog__area blog__area pt---90 pb---120">
                <div className="container blog__width pb---120">
                    <div className="react__title__section text-center">
                        <h6 className="react__subtitle wow animate__fadeInUp" data-wow-duration="0.3s">Recent News.</h6>
                        <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.5s"> Echooling News and Blogs </h2>
                    </div>
                    <div className="row">
                        {posts.map((data, index) => {
                            return (
                                <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    {
                                        <SinglePost
                                            blogID={data.id}
                                            blogImage= {`${data.image}`}
                                            blogTitle= {data.title}
                                            blogAuthor= {data.author}
                                            blogPublishedDate= {data.publishedDate}
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

export default Blog;