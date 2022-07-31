import React,{useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Header/Header';
import { DateRange } from 'react-date-range';
import './NotFoundPage.css'

function NotFoundPage() {
    const [openPageNotFound,setopenPageNotFound] = useState(false)
    const [NotFoundPage,setNotFoundPage] = useState([  {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },])
  return (
    <div className='NotFound'>
        <Navbar/>  
        <div className='NorFoundItem'>
              <h1>Page Not Found</h1>
              <span>It happens! Let’s get you back on track. d</span>
              <div className="descNot">
                  <h2>Destination, property name or address:</h2>
                  <input className='inputNot' type="text" placeholder='e.g. city,region,district or specific hotel' />
                  <div className="spanDiv">
                  <span>Check-in Date</span>
                  <span>Check-out Date</span>
                  </div>
                  <div className="check">
                     
                      <input type="text" onClick={() => setopenPageNotFound(!openPageNotFound)}  placeholder='Check-in Date'/>
                      
                      <input type="text" onClick={() => setopenPageNotFound(!openPageNotFound)}  placeholder='Check-out Date'/>
                 {openPageNotFound &&
                  <DateRange

                  editableDateInputs={true}
                  onChange={(item) => setNotFoundPage([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={NotFoundPage}
                  className="NotFoundDate"
                  minDate={new Date()}
                />}
               
                  </div>
                
                 <button className="buttonNot">Search</button>
    
              </div>
             
        </div>
    </div>
  )
}

export default NotFoundPage