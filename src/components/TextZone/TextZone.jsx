import React from 'react';
import './TextZone.css'
import { useNavigate } from 'react-router-dom';

function TextZone() {
    const navigate = useNavigate()
   
    const Click = () => {
        navigate('/sing')
    }

  return (
    <div className="TextZ">
      <div className="img">
        <img
          src="https://t-cf.bstatic.com/static/img/genius-globe-with-badge_desktop/d807514761b3684aedebced9265c5548a063b7a0.png"
          alt=""
        />
      
      <header className='header10'>
        <h3>Get instant discounts</h3>
        <h4>Just sign into your Booking.com account and look for the blue Genius logo to save</h4>
      </header>
      </div>
      <div className="buttonBlock3">
        <a className='button3' onClick={Click}>Sing in</a>
        <a className='button4' onClick={Click}>Register</a>
      </div>
    </div>
  );
}

export default TextZone;
