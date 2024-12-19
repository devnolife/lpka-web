
import testiImg from '../../assets/images/testimonial/testimonial.png';

const SingleTestimonial = (props) => {
	const { itemClass, itemImg, Title, Designation, Desc, ratingCount, reviewCount, comaImg } = props;
    return (
        <div className={itemClass ? itemClass : 'single-client'}>
            <div class="client-bottom">   
                <span class="client-author">
                <img 
                    src= {itemImg ? itemImg : testiImg} 
                    alt="Image"
                />
                </span>
            </div>                                    
            <div class="client-content">
                <span class="client-title">{Title ? Title : 'Justin Case'} <em> {Designation ? Designation : 'Student'}</em></span>
                <p>{Desc ? Desc : 'Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.'}</p>
                <div class="testimonial__ratings">
                    <em class="icon_star"></em>
                    <em class="icon_star"></em>
                    <em class="icon_star"></em>
                    <em class="icon_star"></em>
                    <em class="icon_star_alt"></em>
                    <span><em> {ratingCount ? ratingCount : '4.9'}</em> ({reviewCount ? reviewCount : '14'} Reviews)</span>
                </div>
                <img 
                    className="comma" 
                    src= {comaImg} 
                    alt="Coma"
                />
            </div>  
        </div>
    )
}

export default SingleTestimonial