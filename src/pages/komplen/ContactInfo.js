import React from 'react';


import infoImg1 from '../../assets/images/contact/2.png'
import infoImg2 from '../../assets/images/contact/3.png'
import infoImg3 from '../../assets/images/contact/4.png'

const ContactInfo = (props) => {
  const { contactBoxClass } = props;
  return (
    <ul className="address-sec">
      <li>
        <em className="icon"><img src={infoImg1} alt="image" /></em>
        <span className="text"><em>Alamat</em> Jl.Sultan Alauddin No.259 Kec.Rappocini</span>
      </li>
      <li>
        <em className="icon"><img src={infoImg2} alt="image" /></em>
        <span className="text"><em>Kontak</em> <a href="#">Telepon: (+88) - 1990 - 6886</a> <a href="#">Email: lpka@unismuh.ac.id</a></span>
      </li>
      <li>
        <em className="icon"><img src={infoImg3} alt="image" /></em>
        <span className="text"><em>Jam Operasi</em> Senin - Sabtu: 08:00 - 16:00 </span>
      </li>
    </ul>
  );

}

export default ContactInfo;
