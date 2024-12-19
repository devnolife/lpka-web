import React from 'react';


import lineImg from '../../assets/images/line.png';

const SectionTitle = (props) => {
    const { sectionClass, titleClass, Title, shapeImg } = props;

    return (
        <div className={sectionClass ? sectionClass : 'react__title__section text-center'}>
            <h2 className={titleClass ? titleClass : 'react__tittle'}>{Title ? Title : 'Title'}</h2>
            <img src={shapeImg ? shapeImg : lineImg} alt="image" />
        </div>
    );
}

export default SectionTitle;