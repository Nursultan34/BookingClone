import React from 'react'
import './MailList.css'

function MailList() {
  return (
    <div className='mail'>
        <h1 className="mailtitle">Save time, save money</h1>
        <span className="mailDecs">Sing up and we'll send the best deals to you</span>
        <div className="mailInput">
            <input type="text" placeholder='Your email' />
            <button>Subscribe</button>
        </div>
        
    </div>
  )
}

export default MailList