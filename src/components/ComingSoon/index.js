import { Link } from 'react-router-dom';

const ComingSoon = () => {
	return (
		<div className="page-error coming-soon">
            <div className="container">
                <div className="error-not-found">
                    <div className="error-content">
                        <h2 className="title">
                            <span>Coming Soon</span>
                            Stay Connected
                        </h2>
                        <div className="btn-part">
                            <Link to="/">
                                <a className="readon orange-btn main-home">Back To Homepage</a>
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
	);
}

export default ComingSoon;