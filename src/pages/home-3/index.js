import React from 'react';
import HomeThreeMain from './HomeThreeMain';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/FooterTwo';

import Logo from '../../assets/images/logos/logo2.png';
import footerLogo from '../../assets/images/logos/footer-logo.png';

const HomeThree = () => {
    return (
        <>
            <Header
                parentMenu='home'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />
            <HomeThreeMain />
            <FooterTwo
                footerLogo={footerLogo}
            />
        </>
    );
}

export default HomeThree;
