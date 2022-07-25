import React from 'react'
import './SingPage.css'
import Navbar from '../../components/navbar/Navbar';

function SingPage() {
  return (
    <div>
        <Navbar/>
        <div className="SingPage">
            <div className="SingPageItem">
                <h1>Sign in or create an account</h1>
                <div className="Input">
                    <h2>Email address</h2>
                  <div className="inputBlock">
                  <input type="text" />
                  </div>
                   <div className="buttonBlock">
                   <button>
                       <span>Continue with email</span>
                   </button>
                   </div>
                </div>
                <div className="panel">
                    <div className="line"></div>
                    <span>or use one of these options</span>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingPage