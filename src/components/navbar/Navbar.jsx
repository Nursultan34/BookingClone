import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()

  const ClickHome = () => {
    navigate("/")
  }
  
  const Singin = () => {
    navigate("/sing")
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={ClickHome}>Booking.com</span>
        <div className="newItems">
          <button className='navbutton' onClick={Singin}>Register</button>
          <button className='navbutton' onClick={Singin}>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
