import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  const navigate = useNavigate();

  const ClickHome = () => {
    navigate('/');
  };

  const Singin = () => {
    navigate('/sing');
  };
  const NextPage = () => {
    navigate('/contact')
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={ClickHome}>
          Booking.com
        </span>
        
        <div className="newItems">
        <span className='nextPage' onClick={NextPage}>
          <FontAwesomeIcon icon={faQuestionCircle}  className='fonts'/>
          </span>
          <button className="navbutton" onClick={Singin}>
            Register
          </button>
          <button className="navbutton" onClick={Singin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
