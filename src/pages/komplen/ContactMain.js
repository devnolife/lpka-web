import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactMain = () => {
  return (
    <>
      <div id="react-contact" className="react-contact-page pt---100">
        <div className="container">
          <div className="row pb---96">
            <div className="col-lg-4 pt---10">
              <ContactInfo />
            </div>
            <div className="col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}


export default ContactMain;
