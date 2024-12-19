
import { Link } from 'react-router-dom';


import blogImg1 from '../../assets/images/blog/1.jpg';

const SingleBlog = (props) => { 
    const { blogClass, blogID, blogImage, blogTitle, blogCategory, blogAuthor, blogPublishedDate } = props;
    return (
        <div className={blogClass ? blogClass : 'blog__card mb-50'}>
            <div className="blog__thumb w-img p-relative">
                <Link
                    to={`/blog/${blogID}`}
                    className="blog__thumb--image"
                >
                    <img 
                        src={blogImage ? `${blogImage}` : `${blogImg1}`} 
                        alt={blogTitle}
                    />
                </Link>
                <em className="b_date">{blogPublishedDate ? blogPublishedDate : 'April 18'}</em>
            </div>
            <div className="blog__card--content">
                <div className="blog__card--content-area mb-25">
                    <span className="blog__card--date">{blogCategory ? blogCategory : "Education"}</span>
                    <h3 className="blog__card--title"><Link to={`/blog/${blogID}`}> {blogTitle ? blogTitle : 'How to growing your business'}</Link></h3>
                </div>
                <div className="blog__card--icon d-flex align-items-center">
                    <div className="blog__card--icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <span>{blogAuthor ? blogAuthor : 'Charlie Doyle'}</span>
                    </div>  
                </div>
            </div>
        </div>

    )
}

export default SingleBlog