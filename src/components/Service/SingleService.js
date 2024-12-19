import React from 'react';
import { Link } from 'react-router-dom';

import serviceImg from '../../assets/images/service/1.png'

const SingleService = (props) => {
  const { itemClass, itemImg, btnText, title } = props;
  return (
    <div className={itemClass ? itemClass : 'item__inner'}>
      <div className="item__inner">
        <div className="icon">
          <img src={itemImg ? itemImg : serviceImg} alt="image" />
        </div>
        <div className="react-content">
          <h3 className="react-title">
            <Link to="/course">{title ? title : 'Let’s Talk Science'}</Link>
          </h3>
          <Link to="/course" className="r__link">{btnText ? btnText : 'Info Lebih Lanjut'} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
        </div>
      </div>
    </div>
  )
}

export default SingleService
