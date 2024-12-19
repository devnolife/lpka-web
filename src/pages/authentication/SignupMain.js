import React from 'react';

const SignupMain = () => {
    return (
        <>
            <div className="react-login-page react-signup-page pt---120 pb---120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-right-form">
                                <form>
                                    <div className="login-top">
                                        <h3>Sign Up</h3>
                                        <p>Already have an account? <a href="login.html">Log in</a></p>
                                    </div>
                                    <p>
                                        <label>Email</label>
                                        <input placeholder="Email" type="email" id="email" name="email" />
                                    </p>
                                    <p>
                                        <label>User Name</label>
                                        <input placeholder="User Name" type="email" id="email" name="email" />
                                    </p>
                                    <p>
                                        <label>Password</label>
                                        <input placeholder="Password" type="password" id="pass" name="pass" />
                                    </p>
                                    <p>
                                        <label>Confirm Password</label>
                                        <input placeholder="Confirm Password" type="password" id="pass" name="pass" />
                                    </p>
                                    <div className="back-check-box">
                                        <input type="checkbox" id="box-1" /> I agree to the <em>Terms & Conditions</em>
                                        <p></p>
                                    </div>
                                    <button type="submit" id="button" name="submit">Register <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                                    <span className="back-or"> ........ or Login with ........ </span>
                                    <ul className="social-links">
                                        <li><a href="#"><span aria-hidden="true" className="social_facebook"></span></a></li>
                                        <li><a href="#"><span aria-hidden="true" className="social_twitter"></span></a></li>
                                    </ul>                                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>

    );
}


export default SignupMain;