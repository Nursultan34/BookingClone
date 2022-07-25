import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './List.css';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';

function ListPage() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="section">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="section">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                date[0].endDate,
                'MM/dd/yyyy',
              )}`}</span>
             {openDate && <DateRange
                minDate={new Date()}
                ranges={date}
                onChange={(item) => setDate([item.selection])}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="Optionls">
              <div className="lsOptionsItem">
                <span className="lsOptionsText">Min price <small>per night</small></span>
                <input type="text" className='lsOptionsInput' />
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionsText">Max price <small>per night</small></span>
                <input type="text" className='lsOptionsInput' />
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionsText">Adult</span>
                <input type="number" min={1} className='lsOptionsInput' placeholder={options.adult}/>
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionsText">Children</span>
                <input type="number" min={0} className='lsOptionsInput' placeholder={options.children}/>
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionsText">Room</span>
                <input type="number" min={1} className='lsOptionsInput' placeholder={options.room}/>
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="Result">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
