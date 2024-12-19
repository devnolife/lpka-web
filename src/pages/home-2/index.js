import React from 'react';
import HomeTwoMain from './HomeTwoMain';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/FooterTwo';

import footerLogo from '../../assets/images/logos/footer-logo.png';

const HomeTwo = () => {
    return (
        <>
            <Header
                parentMenu='home'
                topbarEnable='enable'
            />
            <HomeTwoMain />
            <FooterTwo
                footerLogo={footerLogo}
            />
        </>
    );
}

export default HomeTwo;
