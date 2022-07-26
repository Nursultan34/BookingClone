import React from 'react';
import './ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

function ContactPage() {
    const navigate = useNavigate();

    const Singin = () => {
        navigate('/sing')
    }
  return (
     
    <>
      <Navbar />
      <div className="Cpage">
        <div className="cWrapper">
          <div className="ContactItem">
            <span>Help Centre</span>
            <div className="line"></div>
            <h1>Welcome to the Help Centre</h1>
            <h2>Sign in to contact Customer Service, we're available 24 hours a day</h2>
          </div>
          <div className="contactSecond">
            <div className="text1">
              <FontAwesomeIcon icon={faComments} className="comments" />
              <span>Send us a message</span>
              <h2>Contact our agents about your booking, and we'll reply as soon as possible.</h2>
            </div>
            <div className="text2">
              <FontAwesomeIcon icon={faPhone} className='calls' />
              <span>Call us</span>
              <h2>For anything urgent, you can call us 24/7 on a local or international phone number.</h2>
            </div>
           
          </div>
          <div className="button">
                <button onClick={Singin} >Sing in</button>
            </div>
           <div className="spanblock">
           <span className='span3'>Continue without an account</span>
           </div>
        </div>
       
      </div>
    </>
  );
}

export default ContactPage;
