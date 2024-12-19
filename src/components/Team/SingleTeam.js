import { Link } from 'react-router-dom';

const SingleTeam = (props) => {
    const { teamClass, Image, Title, Designation } = props;
	return(
        <div className={teamClass ? teamClass : 'team-item'}>
            <div className="ras-single-team">
                <div className="ras-team-photo">
                    <img 
                        src={Image} 
                        alt={Title}
                    />
                    <ul className="ras-team-social">
                        <li>
                            <a href="#"><i className="icofont-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="icofont-telegram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="icofont-linkedin"></i></a>
                        </li>
                    </ul>
                </div>

                <div className="ras-team-info">
                    <h4 className="ras-team-name">
                        <Link to='/team/team-details'>
                            {Title ? Title : 'Emiley Philifs'}
                        </Link>
                    </h4>
                    <p className="ras-team-designation">{Designation ? Designation : 'Digital marketer'}</p>
                </div>
            </div>
        </div>
	)
}

export default SingleTeam