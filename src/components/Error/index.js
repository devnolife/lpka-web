import { Link } from 'react-router-dom';

import errorImg from '../../assets/images/404.png'

const ErrorContent = () => {
	return (
		<div className="page-error">
            <div className="container">
                <div id="content">
                    <div id="primary" className="content-area">
                        <main id="main" className="site-main">    
                            <section className="error-404 not-found">    
                                <div className="page-content">
                                    <img className="error-image" src={errorImg} alt="Echooling - Education React Template" />
                                    <h2>
                                        <span>404. Page not found</span>                      
                                        Sorry, we couldn’t find the page you where looking for. We suggest that you return to homepage.
                                    </h2>
                                    <Link className="reacbutton" to="/">Back to Homepage <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>   
        </div>
	);
}

export default ErrorContent;